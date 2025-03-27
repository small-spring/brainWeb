export class SearchManager {
    constructor(network, allNodes) {
        this.network = network; // vis.Networkオブジェクト
        this.allNodes = allNodes; // vis.DataSetオブジェクト
        this.results = []; // 検索結果のノード
        this.currentIndex = 0; // 現在の検索結果のインデックス
        this.visibleIndexes = []; // 表示中のノードのインデックス
        this.initializeDOM(); // DOM要素の初期化
    }

    initializeDOM() {
        this.elements = {
            searchBox: document.getElementById("searchBox"),
            matchStatus: document.getElementById("matchStatus"),
            matchList: document.getElementById("matchList")
        };
        this.setupEventListeners();
    }

    setupEventListeners() {
        // キーボードイベントの設定
        this.elements.searchBox.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "Enter":
                    this.search();
                    break;
                case "ArrowDown":
                case "ArrowRight":
                    event.preventDefault();
                    this.nextMatch();
                    break;
                case "ArrowUp":
                case "ArrowLeft":
                    event.preventDefault();
                    this.prevMatch();
                    break;
                case "Escape":
                    this.clear();
                    break;
            }
        });
    }

    search() {
        //キーワードによるノード検索
        
        // 1. 入力値の取得と小文字化
        const keyword = document.getElementById("searchBox").value.toLowerCase();

        // 2. キーワードに一致するノードをフィルタリング
        if (keyword === "") {
            this.clear();
            return;
        }

        matchResults = allNodes.get().filter(n =>
            n.label.toLowerCase().includes(keyword) ||
            (n.title && n.title.toLowerCase().includes(keyword))
        );

        // 3. 検索結果の表示とフォーカス
        if (this.results.length > 0) {
            this.currentIndex = 0; // 検索結果の最初のノードにフォーカス
            const maxLevel = parseInt(document.getElementById("levelInput").value); // レベルの取得
            this.updateMatchList(maxLevel);  // リストの生成はここだけで行う
            this.focusOnMatch();
        } else {
            this.elements.matchStatus.textContent = "No match";
            this.elements.matchList.innerHTML = "";
            alert("No match found.");
        }
    }

    clear() {
        // 検索結果をリセット
        this.results = [];
        this.currentIndex = 0;

        // UI要素をクリア
        this.elements.matchStatus.textContent = "";
        this.elements.matchList.innerHTML = "";
    }

    prevMatch() {
        // 前の結果へ
        // todo
    }

    nextMatch() {
        // 次の結果へ
        // todo
    }

    focusOnMatch() {
        // 現在の選択中のnodeを取得
        const node = this.results[this.currentIndex];
        const maxLevel = parseInt(document.getElementById("levelInput").value);

        // ノードを選択し、フォーカスする
        this.network.selectNodes([node.id]);
        this.network.focus(node.id, {
                scale: 1.5, 
                animation: { duration: 500} // アニメーションの設定
            });
        
        // DOM要素も this.elements 経由でアクセス
        this.elements.matchStatus.textContent = 
            `${this.currentIndex + 1} / ${this.results.length} matches`;

        // リストのハイライトと可視性を更新
        const listItems = document.querySelectorAll("#matchList li");
        listItems.forEach((li, idx) => {
            const node = this.results[idx];
            const visible = this.isVisible(node, maxLevel);
            
            li.classList.toggle("selected", idx === this.currentIndex);
            li.classList.toggle("invisible", !visible);
        });

    isVisible(node, maxLevel) {
        // todo
    }

    updateMatchList(maxLevel) {
        // todo
    }

    updateMatchStatus() {
        // todo
    }


    // ... 既存の検索関連メソッド（search, prevMatch, nextMatch等）をここに移動
}