// ネットワークデータの読み込み
let matchResults = [];
let matchIndex = 0;
let visibleMatchIndexes = [];

// グラフ描画用のネットワークを初期化
const container = document.getElementById("mynetwork");
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

const network = new vis.Network(container, data, options);

// 初期表示を反映
filterByLevel();



//以下は関数・クラス

// --------------------------------------Root Node関連-------------------------------------
/**
 * ルートノードを設定し、表示を更新する
 */
function setRoot() {
    const rootId = parseInt(document.getElementById("rootId").value);
    const rootNode = allNodes.get(rootId);

    if (!rootNode) {
        alert("無効なノードIDです");
        return;
    }

    // ルート情報を更新
    updateRootInfo(rootNode);
    
    // 子孫ノードを収集してフィルタリング
    const descendants = collectDescendantIds(rootId, allEdges);
    const displayDepth = parseInt(document.getElementById("levelInput").value);
    
    // 表示するノードをフィルタリング
    const visibleNodes = allNodes.get().filter(node => 
        descendants.has(node.id) && node.level <= displayDepth
    );

    // エッジをフィルタリング
    const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
    const visibleEdges = allEdges.get().filter(e => 
        visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to)
    );

    // ネットワークを更新
    network.setData({
        nodes: new vis.DataSet(visibleNodes),
        edges: new vis.DataSet(visibleEdges)
    });

    // 検索結果リストを更新
    updateMatchList(displayDepth);

    // ルートノードにフォーカス
    network.focus(rootId, {
        scale: 1.0,
        animation: { duration: 1000 }
    });
}

/**
 * ルートノードの情報を表示エリアに更新
 */
function updateRootInfo(node) {
    document.getElementById("rootName").textContent = node.label || '';
    document.getElementById("rootAcronym").textContent = 
        node.acronym ? `(${node.acronym})` : '';

    // 存在するがisVisibleではない → 「レベルxに存在」を表示する。
    // 存在しない場合は does not exist と表示

    //
}

// 初期表示時のルート情報を設定
const initialRootId = parseInt(document.getElementById("rootId").value);
updateRootInfo(allNodes.get(initialRootId));



// --------------------------------------Display Depth 関連-------------------------------------
/**
 * Filter nodes by their level and update the network visualization.
 */
function filterByLevel() {
    // 入力された最大レベルを取得
    const displayDepth = parseInt(document.getElementById("levelInput").value);
    // 最大レベル以下のノードをフィルタリング
    const visibleNodes = allNodes.get().filter(n => n.level <= displayDepth);
    // フィルタリングされたノードのIDをセットにする
    const visibleIds = new Set(visibleNodes.map(n => n.id));
    // フィルタリングされたノードに関連するエッジをフィルタリング
    const visibleEdges = allEdges.get().filter(e => visibleIds.has(e.from) && visibleIds.has(e.to));
  
    // ネットワークデータを更新
    network.setData({
        nodes: new vis.DataSet(visibleNodes),
        edges: new vis.DataSet(visibleEdges)
    });
  
    // リストの再作成
    updateMatchList(displayDepth);
}


// --------------------------------------検索関連--------------------------------------
/**
 * Search for nodes by keyword and update the search results.
 */function searchNode() {
    // 検索ボックスの値を取得し、小文字に変換
    const keyword = document.getElementById("searchBox").value.toLowerCase();

    if (keyword === "") {
        // キーワードが空の場合、検索結果をクリア
        matchResults = [];
        matchIndex = 0;
        clearSearch();
        return;
    }

    // キーワードに一致するノードをフィルタリング
    matchResults = allNodes.get().filter(n =>
        (n.acronym && n.acronym.toLowerCase().includes(keyword)) ||
        (n.name && n.name.toLowerCase().includes(keyword)) 
    );

    if (matchResults.length > 0) {
        matchIndex = 0;
        const maxLevel = parseInt(document.getElementById("levelInput").value);
        updateMatchList(maxLevel);  // リストの生成はここだけで行う
        focusOnMatch();
    } else {
        const matchStatus = document.getElementById("matchStatus");
        matchStatus.textContent = "No match";
        document.getElementById("matchList").innerHTML = "";
        alert("No match found.");
    }
}

/**
 * Navigate to the previous match in the search results.
 */
function prevMatch() {
    if (visibleMatchIndexes.length === 0) return;
    const currentVisibleIndex = visibleMatchIndexes.indexOf(matchIndex);
    const prevVisibleIndex = (currentVisibleIndex - 1 + visibleMatchIndexes.length) % visibleMatchIndexes.length;
    matchIndex = visibleMatchIndexes[prevVisibleIndex];
    focusOnMatch();
}


/**
 * Navigate to the next match in the search results.
 */
function nextMatch() {
    if (visibleMatchIndexes.length === 0) return;
    const currentVisibleIndex = visibleMatchIndexes.indexOf(matchIndex);
    const nextVisibleIndex = (currentVisibleIndex + 1) % visibleMatchIndexes.length;
    matchIndex = visibleMatchIndexes[nextVisibleIndex];
    focusOnMatch();
}


function focusOnMatch() {
    // 検索結果のノードを選択し、フォーカスする
    const node = matchResults[matchIndex];
    const maxLevel = parseInt(document.getElementById("levelInput").value);
    
    network.selectNodes([node.id]);
    network.focus(node.id, {
        scale: 1.5,
        animation: { duration: 500 }
    });

    // 検索結果のステータスを更新
    const matchStatus = document.getElementById("matchStatus");
    matchStatus.textContent = `${matchIndex + 1} / ${matchResults.length} matches`;

    // リストのハイライトと可視性を更新
    const listItems = document.querySelectorAll("#matchList li");
    listItems.forEach((li, idx) => {
        const node = matchResults[idx];
        const visible = isVisible(node, maxLevel);
        
        li.classList.toggle("selected", idx === matchIndex);
        li.classList.toggle("invisible", !visible);
    
    });
}

/**
 * Clear the search results and reset the search state.
 */
function clearSearch() {
    matchResults = [];
    matchIndex = 0;
    document.getElementById("searchBox").value = "";
    document.getElementById("matchStatus").textContent = "";
    document.getElementById("matchList").innerHTML = "";
    network.unselectAll();
}



/**
 * 検索結果リストを更新する  
 * リストを一旦クリアして、matchResultsをmaxLevelに基づいて再度作成する
 */
function updateMatchList(maxLevel) {
    const matchStatus = document.getElementById("matchStatus");
    const matchList = document.getElementById("matchList");
    matchList.innerHTML = "";
  
    // visibleMatchIndexes をリセット
    visibleMatchIndexes = [];
  
    if (matchResults.length === 0) {
        matchStatus.textContent = "";
        return;
    }
  
    // matchResultsをレベル順にソート（レベル昇順、同レベルならラベル順）
    matchResults.sort((a, b) => {
        if (a.level !== b.level) {
            return a.level - b.level;
        }
        return a.label.localeCompare(b.label);
    });
  
    // インデックスを調整
    matchIndex = Math.min(matchIndex, matchResults.length - 1);
  
    // 検索結果のステータスを更新
    matchStatus.textContent = `${matchIndex + 1} / ${matchResults.length} matches`;
  
    // ソート済みの結果でリストを生成
    matchResults.forEach((node, idx) => {
        const visible = isVisible(node, maxLevel);
        const li = document.createElement("li");
        li.textContent = `${node.label} (Level ${node.level})`;
  
        // visibleならクリック可能＆visibleMatchIndexesに追加
        if (visible) {
            visibleMatchIndexes.push(idx);
            li.onclick = () => {
                matchIndex = idx;
                focusOnMatch();
            };
        }
  
        // クラスで可視/非可視を設定
        li.classList.toggle("invisible", !visible);
        if (idx === matchIndex) {
            li.classList.add("selected");
        }
  
        matchList.appendChild(li);
    });
}
// 描画されるノードのID取得。
/**
 * 指定されたノードの子孫のIDを収集する
 * @param {number} rootId - ルートノードのID
 * @param {vis.DataSet} edges - エッジのデータセット
 * @returns {Set<number>} - 子孫ノードのIDのセット
 */
function collectDescendantIds(rootId, edges) {
    const descendants = new Set();
    const queue = [rootId];

    while (queue.length > 0) {
        const currentId = queue.shift();
        descendants.add(currentId);

        edges.get().forEach(edge => {
            if (edge.from === currentId && !descendants.has(edge.to)) {
                queue.push(edge.to);
            }
        });
    }

    return descendants;
}

/**
 * ノードが指定されたレベル範囲内かどうかを判定
 * @param {Object} node - 判定対象のノード
 * @param {number} baseLevel - 基準となるレベル
 * @param {number} levelLimit - レベルの制限値
 * @returns {boolean} - レベル範囲内ならtrue
 */
function isWithinLevel(node, baseLevel, levelLimit) {
    return node.level <= baseLevel + levelLimit;
}

/**
 * ノードが表示可能かどうかを判定
 * @param {Object} node - 判定対象のノード
 * @param {Set<number>} descendants - 子孫ノードのIDセット
 * @param {number} displayDepth - 表示する深さ
 * @returns {boolean} - 表示可能ならtrue
 */
function isVisible(node, descendants, displayDepth) {
    return descendants.has(node.id) && node.level <= displayDepth;
}