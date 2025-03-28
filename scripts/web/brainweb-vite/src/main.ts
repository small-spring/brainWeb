// 仮のデータを削除して、実データに差し替え
import { nodes } from "./data/nodes";
import { edges } from "./data/edges";

import { DataSet } from "vis";
import { GraphManager } from "./GraphManager";
import { UIStateManager } from "../../UIStateManager";
import { GraphNode, GraphEdge } from "./types";

// ① UI状態管理
const ui = new UIStateManager();

// ② 仮のデータ（本番は読み込み）
const allNodes = new DataSet<GraphNode>(nodes);
const allEdges = new DataSet<GraphEdge>(edges);

// ③ ネットワーク描画エリア取得
const container = document.getElementById("mynetwork") as HTMLElement;
if (!container) throw new Error("mynetwork が存在しません");

// ④ GraphManager 初期化
const graphManager = new GraphManager(container, allNodes, allEdges, ui);

// ⑤ イベントハンドラ登録
(document.getElementById("setRootBtn") as HTMLButtonElement)?.addEventListener("click", () => {
    const state = ui.read();
    graphManager.updateRoot(state.rootId);
});

(document.getElementById("filterBtn") as HTMLButtonElement)?.addEventListener("click", () => {
    const state = ui.read();
    graphManager.updateDisplayDepthFromUI();
});

(document.getElementById("searchBtn") as HTMLButtonElement)?.addEventListener("click", () => {
    const state = ui.read();
    graphManager.search(state.keyword);
});

(document.getElementById("prevBtn") as HTMLButtonElement)?.addEventListener("click", () => {
    graphManager.prevMatch();
});

(document.getElementById("nextBtn") as HTMLButtonElement)?.addEventListener("click", () => {
    graphManager.nextMatch();
});

(document.getElementById("clearBtn") as HTMLButtonElement)?.addEventListener("click", () => {
    graphManager.clearSearch();
});
