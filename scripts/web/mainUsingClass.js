class GraphManager {
    constructor(container, allNodes, allEdges) {
        this.allNodes = allNodes;
        this.allEdges = allEdges;
        
        // ネットワークの初期化
        const data = { nodes: allNodes, edges: allEdges };
        const options = {
            physics: {
                barnesHut: {
                    gravitationalConstant: -12000,
                    springLength: 100,
                    springConstant: 0.04
                },
                minVelocity: 1.0,
            },
            layout: {
                improvedLayout: false
            }
        };
        
        this.network = new vis.Network(container, data, options);
        this.searchManager = new SearchManager(this.network, this.allNodes);
        
        // 現在の状態
        this.rootId = parseInt(document.getElementById("rootId").value);
        this.displayDepth = parseInt(document.getElementById("levelInput").value);
        this.descendants = new Set();
        
        // 初期表示
        this.updateRoot(this.rootId);
    }

    updateRoot(newRootId) {
        const rootNode = this.allNodes.get(newRootId);
        if (!rootNode) {
            alert("無効なノードIDです");
            return false;
        }

        this.rootId = newRootId;
        this.descendants = this.collectDescendantIds(this.rootId);
        this.updateRootInfo(rootNode);
        this.updateVisibleNodes();
        this.focusOnNode(this.rootId);
        return true;
    }

    updateDisplayDepth(newDepth) {
        this.displayDepth = newDepth;
        this.updateVisibleNodes();
    }

    updateVisibleNodes() {
        const visibleNodes = this.allNodes.get().filter(node => 
            this.isNodeVisible(node)
        );

        const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
        const visibleEdges = this.allEdges.get().filter(e => 
            visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to)
        );

        this.network.setData({
            nodes: new vis.DataSet(visibleNodes),
            edges: new vis.DataSet(visibleEdges)
        });

        // 検索結果の表示も更新
        this.searchManager.updateVisibility(node => this.isNodeVisible(node));
    }

    isNodeVisible(node) {
        return this.descendants.has(node.id) && node.level <= this.displayDepth;
    }

    collectDescendantIds(rootId) {
        const descendants = new Set();
        const queue = [rootId];

        while (queue.length > 0) {
            const currentId = queue.shift();
            descendants.add(currentId);

            this.allEdges.get().forEach(edge => {
                if (edge.from === currentId && !descendants.has(edge.to)) {
                    queue.push(edge.to);
                }
            });
        }

        return descendants;
    }

    updateRootInfo(rootNode) {
        document.getElementById("rootName").textContent = rootNode.label || '';
        document.getElementById("rootAcronym").textContent = 
            rootNode.acronym ? `(${rootNode.acronym})` : '';
    }

    focusOnNode(nodeId, scale = 1.0) {
        this.network.selectNodes([nodeId]);
        this.network.focus(nodeId, {
            scale,
            animation: { duration: 1000 }
        });
    }

    search(keyword) {
        this.searchManager.search(keyword, node => this.isNodeVisible(node));
    }
}

class SearchManager {
    constructor(network, allNodes) {
        this.network = network;
        this.allNodes = allNodes;
        this.results = [];
        this.currentIndex = 0;
        this.visibleIndices = [];
    }

    search(keyword, isNodeVisible) {
        if (!keyword) {
            this.clear();
            return;
        }

        const loweredKeyword = keyword.toLowerCase();
        this.results = this.allNodes.get().filter(node =>
            node.label.toLowerCase().includes(loweredKeyword) ||
            (node.title && node.title.toLowerCase().includes(loweredKeyword))
        );

        if (this.results.length > 0) {
            this.currentIndex = 0;
            this.updateUI(isNodeVisible);
            this.focusOnCurrent();
        } else {
            this.showNoMatchMessage();
        }
    }

    updateVisibility(isNodeVisible) {
        if (this.results.length > 0) {
            this.updateUI(isNodeVisible);
        }
    }

    updateUI(isNodeVisible) {
        const matchStatus = document.getElementById("matchStatus");
        const matchList = document.getElementById("matchList");
        matchList.innerHTML = "";

        // 表示可能なインデックスをリセット
        this.visibleIndices = [];

        if (this.results.length === 0) {
            matchStatus.textContent = "";
            return;
        }

        // ステータス更新
        matchStatus.textContent = `${this.currentIndex + 1} / ${this.results.length} matches`;

        // リスト生成
        this.results.forEach((node, idx) => {
            const visible = isNodeVisible(node);
            if (visible) {
                this.visibleIndices.push(idx);
            }
            matchList.appendChild(this.createListItem(node, visible, idx));
        });
    }

    createListItem(node, visible, index) {
        const li = document.createElement("li");
        li.textContent = `${node.label} (Level ${node.level})`;
        
        if (visible) {
            li.onclick = () => {
                this.currentIndex = index;
                this.focusOnCurrent();
            };
        }

        li.classList.toggle("invisible", !visible);
        li.classList.toggle("selected", index === this.currentIndex);
        
        return li;
    }

    focusOnCurrent() {
        if (this.results.length === 0 || this.currentIndex < 0) return;

        const node = this.results[this.currentIndex];
        this.network.selectNodes([node.id]);
        this.network.focus(node.id, {
            scale: 1.5,
            animation: { duration: 500 }
        });

        // リストの選択状態を更新
        document.querySelectorAll("#matchList li").forEach((li, idx) => {
            li.classList.toggle("selected", idx === this.currentIndex);
        });
    }

    prev() {
        if (this.visibleIndices.length === 0) return;
        const currentVisibleIndex = this.visibleIndices.indexOf(this.currentIndex);
        this.currentIndex = this.visibleIndices[
            (currentVisibleIndex - 1 + this.visibleIndices.length) % this.visibleIndices.length
        ];
        this.focusOnCurrent();
    }

    next() {
        if (this.visibleIndices.length === 0) return;
        const currentVisibleIndex = this.visibleIndices.indexOf(this.currentIndex);
        this.currentIndex = this.visibleIndices[
            (currentVisibleIndex + 1) % this.visibleIndices.length
        ];
        this.focusOnCurrent();
    }

    clear() {
        this.results = [];
        this.currentIndex = 0;
        this.visibleIndices = [];
        document.getElementById("searchBox").value = "";
        document.getElementById("matchStatus").textContent = "";
        document.getElementById("matchList").innerHTML = "";
        this.network.unselectAll();
    }

    showNoMatchMessage() {
        document.getElementById("matchStatus").textContent = "No match";
        document.getElementById("matchList").innerHTML = "";
    }
}

// グローバルインスタンスの作成
const graphManager = new GraphManager(
    document.getElementById("mynetwork"),
    allNodes,
    allEdges
);

// イベントハンドラ
function setRoot() {
    const rootId = parseInt(document.getElementById("rootId").value);
    graphManager.updateRoot(rootId);
}

function filterByLevel() {
    const displayDepth = parseInt(document.getElementById("levelInput").value);
    graphManager.updateDisplayDepth(displayDepth);
}

function searchNode() {
    const keyword = document.getElementById("searchBox").value;
    graphManager.search(keyword);
}

function prevMatch() {
    graphManager.searchManager.prev();
}

function nextMatch() {
    graphManager.searchManager.next();
}

function clearSearch() {
    graphManager.searchManager.clear();
}