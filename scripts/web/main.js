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


// --------------------------------------以下は関数だけ。--------------------------------------
/**
 * Filter nodes by their level and update the network visualization.
 */
function filterByLevel() {
    // 入力された最大レベルを取得
    const maxLevel = parseInt(document.getElementById("levelInput").value);
    // 最大レベル以下のノードをフィルタリング
    const visibleNodes = allNodes.get().filter(n => n.level <= maxLevel);
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
    updateMatchList(maxLevel);
}

// SearchManager.jsのsearch()関数に移行
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
        n.label.toLowerCase().includes(keyword) ||
        (n.title && n.title.toLowerCase().includes(keyword))
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
 * ノードの可視性を判定する関数
 */
function isVisible(node, maxLevel) {
    return node.level <= maxLevel;
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

// // キーボードイベントのハンドリングを追加
// document.getElementById("searchBox").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         searchNode();
//     } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
//         event.preventDefault();  // デフォルトのスクロール動作を防止
//         nextMatch();
//     } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
//         event.preventDefault();  // デフォルトのスクロール動作を防止
//         prevMatch();
//     } else if (event.key === "Escape") {
//         clearSearch();
//     }
// });