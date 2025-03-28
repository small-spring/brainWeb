## つかいかた
このwebディレクトリごとダウンロードして、[brain_graph_interactive.html](scripts\web\brain_graph_interactive.html)をブラウザで開く。

## なかみ
- data/edges.js
- data/nodes.js
  - [scripts\gen_graph](scripts\gen_graph)ディレクトリにより生成

- logic.js
  - 全てがここにつまっている。

## todo
- SearchManager.jsとmain.jsに分離する。
  - main.js + NetworkManager.js + SearchManager.js の3ファイルだけ試験導入



## UI
- `control` コンポーネント
    - ノードの検索
        - 検索ボックスに何も入れずに検索すると
            - （Enterを押す or Search ボタンを押す）とフォーカス・検索結果リストがリセットされる。
        - 検索ボックスに文字列を入れると、
            - 部分一致を全部リストしてくれる。
            - そのリストのうち、グラフ上に表示されていないものは灰色(Opacityで管理)・ホバーしても何も起こらない。
            - グラフ上に表示されている場合、太字・黒字・クリック可能で、クリックするとそれに飛ぶ。
            - リストはlevel順にソートされている。
            - 検索結果リストの中に、1つのでもisVisibleがある
                - 検索直後はリストの一番上にフォーカスする。
                - Next, Prevボタンが現れ、それを押す or 方向キー入力 で次、前の結果へ移動
                - 検索結果 かつ isVisible の中をぐるぐる回る。
            - ないとき
                - フォーカスせず、クリック不可なリストができる。
    - rootの制御
        - idを入力→set rootボタンを押す or 好きなisVisibleノードを選んで右クリック→rootに設定をすると、root以下のグラフだけを表示するようになる。
        - デフォルト値が入力されたボックスがあり、はじめはそれが参照される。
        - idを入力するボックスと、それの横に name (acronym) が表示される
        - デフォルト値が設定されている。
    - レベルの制御
        - デフォルト値が入力されたボックスがあり、はじめはそれが参照される。
        - rootから何個子ノードを表示するかの数字。
        - level: 3ならroot含めて3階層表示される。
        - int？で入力し、set level とかにする。
    - グラフ上に表示されているかの判定
        - まず、rootの子孫であることで絞る `isOffspring`? より良い単語があればそれを使う
        - 次に、rootから何level表示しているか `numLevel`? によって、表示されているかどうかを判定する。
- `network` コンポーネント
    - グラフが描画される。
    - 各ノードは、ノードの`color` フィールドに基づいた色分けがされている。
-  ノードの選択
        - 興味があるノードをクリック/右クリック→詳細を表示？すると、右サイドバーが出てきてノードの情報（名前、略称、id、など）を表示してくれる。
        - これ検索結果リストの形式に合わせるのもあり。1つ検索した、みたいな表示をするのでも良い。


## データ型
### ● Node
```ts
type Node = {
    id: number;           // ユニークな識別子
    acronym: string;
    name: string;        // 正式名称
    color: string;       // 可視化用カラーコード
    level: number;        // ツリーの階層（0がroot）
}
```
### ● Edge
```ts
type Edge = {
    from: number;         // 親ノードのid
    to: number;           // 子ノードのid
}
```

### ● DisplayState型
```ts
type DisplayState = {
    rootId: number;                     // 現在のroot
    baseLevel: number;                 // rootのlevel
    levelLimit: number;               // 表示階層数
    visibleNodeIdSet: Set<number>;    // root以下の表示ノードID（子孫+level制限を満たす）
}
```

### ● SearchState
```ts
type SearchState = {
    matchResults: Node[];
    matchIndex: number;
    visibleMatchIndexes: number[];
}
```
### ● UserInput
```ts
type UserInput = {
    levelLimit: number;
    searchKeyword: string;
    rootId: number;
}
```



---

# Claude 3.5 Sonnet (Preview) の良さげな提案：

small-spring: 保守性を高めたい。
そもそも、htmlとjsがあってどう動いているの？グローバル変数はどう変化するの？

Workspace: ワークスペース情報を収集していますページの構造と動作を分析しましょう。

### 基本構造

1. **HTMLファイル** (brain_graph_interactive.html)
- ネットワークグラフを表示する`<div id="mynetwork">`
- レベルフィルター用の入力フィールド`<input id="levelInput">`
- 検索用の入力フィールド`<input id="searchBox">`
- 検索結果表示エリア`<div id="matchList">`

2. **グローバル変数**
```javascript
// 検索関連
let matchResults = [];     // 検索結果のノード配列
let matchIndex = 0;       // 現在選択中の検索結果インデックス
let visibleMatchIndexes = []; // 可視状態の検索結果インデックス

// グラフ関連
const network;  // vis.jsのネットワークインスタンス
const allNodes; // 全ノードデータ（data/nodes.jsから読み込み）
const allEdges; // 全エッジデータ（data/edges.jsから読み込み）
```

### 主な改善提案

1. **モジュール化**
```javascript
// SearchManager.js
class SearchManager {
    constructor() {
        this.results = [];
        this.currentIndex = 0;
        this.visibleIndexes = [];
    }
    
    search(keyword, nodes, maxLevel) {
        // 検索ロジックをカプセル化
    }
}

// NetworkManager.js
class NetworkManager {
    constructor(container, nodes, edges) {
        this.network = new vis.Network(/* ... */);
    }
    
    filterByLevel(maxLevel) {
        // フィルタリングロジックをカプセル化
    }
}
```

2. **イベントシステムの導入**
```javascript
// EventBus.js
class EventBus {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        // イベントリスナーの登録
    }
    
    emit(event, data) {
        // イベントの発火
    }
}
```

3. **設定の外部化**
```javascript
// config.js
export const NetworkConfig = {
    physics: {
        barnesHut: {
            gravitationalConstant: -12000,
            springLength: 100,
            springConstant: 0.04
        },
        minVelocity: 1.0
    }
};
```

4. **状態管理の改善**
```javascript
// State.js
class ApplicationState {
    constructor() {
        this.searchState = {
            keyword: '',
            results: [],
            currentIndex: 0
        };
        this.networkState = {
            currentLevel: 1,
            visibleNodes: new Set()
        };
    }
}
```

これらの改善により：
- コードの責任範囲が明確になる
- テストが書きやすくなる
- 状態の変更が追跡しやすくなる
- 機能の拡張が容易になる

### 改善案：具体的な実装例：
small-spring: @workspace 具体的な実装例を教えて。

Workspace: ワークスペース情報を収集しています`@workspace` accuracy and speed can be improved by building a remote workspace index. [詳細情報](https://aka.ms/vscode-copilot-workspace-remote-index)

Build remote workspace index

アプリケーションの改善案を具体的な実装例で示します。

まず、以下のような構造でファイルを整理します：

```
scripts/web/
├── index.html
├── style.css
├── config/
│   ├── network-config.js
│   └── app-config.js
├── modules/
│   ├── NetworkManager.js
│   ├── SearchManager.js
│   ├── EventBus.js
│   ├── LoadingManager.js
│   ├── PaginationManager.js
│   └── EmbedManager.js
└── main.js
```

#### config/：設定ファイルの分離
**network-config.js**
````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\config\network-config.js
export const NetworkConfig = {
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
````

**app-comfig.hs**
````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\config\app-config.js

export const AppConfig = {
    maxLevel: 5,  // 最大レベル
    pagination: {
        itemsPerPage: 10,
        maxVisiblePages: 5
    },
    search: {
        includeAbbreviations: true,  // 略号検索対応
        debounceTime: 300  // 検索の最適化
    }
};
````

#### modules/ モジュール化
1. **イベントバス実装** EventBus.js

````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\modules\EventBus.js
export class EventBus {
    constructor() {
        this.listeners = new Map();
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => callback(data));
        }
    }
}
````

2. **ネットワーク管理クラス** NetworkManager.js
- 木の根元の変更対応

````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\modules\NetworkManager.js
import { NetworkConfig } from '../config/network-config.js';

export class NetworkManager {
    constructor(container, eventBus) {
        this.eventBus = eventBus;
        this.network = new vis.Network(container, { nodes: [], edges: [] }, NetworkConfig);
        
        this.network.on("selectNode", params => {
            this.eventBus.emit("nodeSelected", params);
        });
    }

    setData(nodes, edges) {
        this.network.setData({
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges)
        });
    }

    filterByLevel(allNodes, allEdges, maxLevel) {
        const visibleNodes = allNodes.get().filter(n => n.level <= maxLevel);
        const visibleIds = new Set(visibleNodes.map(n => n.id));
        const visibleEdges = allEdges.get().filter(e => 
            visibleIds.has(e.from) && visibleIds.has(e.to)
        );

        this.setData(visibleNodes, visibleEdges);
        this.eventBus.emit("dataFiltered", { visibleNodes, visibleEdges });
    }

    focusOnNode(nodeId) {
        this.network.selectNodes([nodeId]);
        this.network.focus(nodeId, {
            scale: 1.5,
            animation: { duration: 500 }
        });
    }
}
````

3. **検索管理クラス** SearchManager.js

````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\modules\SearchManager.js
export class SearchManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.results = [];
        this.currentIndex = 0;
        this.visibleIndexes = [];

        this.searchBox = document.getElementById("searchBox");
        this.matchStatus = document.getElementById("matchStatus");
        this.matchList = document.getElementById("matchList");

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.searchBox.addEventListener("input", () => this.search());
        this.eventBus.on("dataFiltered", () => this.updateVisibility());
    }

    search() {
        const keyword = this.searchBox.value.toLowerCase();
        if (!keyword) {
            this.clear();
            return;
        }

        this.results = allNodes.get().filter(n =>
            n.label.toLowerCase().includes(keyword) ||
            (n.title && n.title.toLowerCase().includes(keyword))
        );

        this.currentIndex = 0;
        this.updateMatchList();
        this.focusCurrentMatch();
    }

    updateMatchList() {
        // 既存のupdateMatchList関数の実装
    }

    focusCurrentMatch() {
        if (this.results.length > 0) {
            const currentNode = this.results[this.currentIndex];
            this.eventBus.emit("focusNode", currentNode.id);
        }
    }

    clear() {
        this.results = [];
        this.currentIndex = 0;
        this.searchBox.value = "";
        this.matchStatus.textContent = "";
        this.matchList.innerHTML = "";
        this.eventBus.emit("searchCleared");
    }
}
````
4. **LoadingManager.js**

````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\modules\LoadingManager.js
export class LoadingManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.loadingElement = document.getElementById("loading");
    }

    show() {
        this.loadingElement.style.display = "block";
    }

    hide() {
        this.loadingElement.style.display = "none";
    }
}
````

5. **PaginationManager.js**

````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\modules\PaginationManager.js
export class PaginationManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.pageSize = 10;
        this.currentPage = 1;
    }

    paginate(results) {
        // 検索結果のページネーション処理
    }
}
````

#### **メインアプリケーション**
main.js
````javascript
// filepath: c:\Users\koko4\programs\brainWeb\scripts\web\main.js
import { EventBus } from './modules/EventBus.js';
import { NetworkManager } from './modules/NetworkManager.js';
import { SearchManager } from './modules/SearchManager.js';

class Application {
    constructor() {
        this.eventBus = new EventBus();
        this.container = document.getElementById("mynetwork");
        
        this.networkManager = new NetworkManager(this.container, this.eventBus);
        this.searchManager = new SearchManager(this.eventBus);
        
        this.setupEventListeners();
        this.initialize();
    }

    setupEventListeners() {
        document.getElementById("levelInput")
            .addEventListener("change", e => this.onLevelChange(e));
    }

    initialize() {
        const initialLevel = parseInt(document.getElementById("levelInput").value);
        this.networkManager.filterByLevel(allNodes, allEdges, initialLevel);
    }

    onLevelChange(event) {
        const maxLevel = parseInt(event.target.value);
        this.networkManager.filterByLevel(allNodes, allEdges, maxLevel);
    }
}

// アプリケーションの起動
document.addEventListener('DOMContentLoaded', () => {
    new Application();
});
````



この実装により：

- 責任の分離が明確になる
- コンポーネント間の依存関係が疎結合になる
- テストが容易になる
- 状態管理が整理される
- 機能の拡張が容易になる

また、EventBusを使用することで、コンポーネント間の通信が明確になり、デバッグも容易になります。

---
ChatGPTの反応：

- 最初は一部だけ（たとえば SearchManager だけ外に出す）ところから始めてもOK！

- もし今は「とりあえず動いてる状態を崩したくない」という場合も：
  - main.js + NetworkManager.js + SearchManager.js の3ファイルだけ試験導入
  - EventBus は将来的にでもOK