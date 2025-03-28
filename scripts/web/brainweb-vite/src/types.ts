// types.ts
// UIの状態を表す構造
export type UIState = {
    rootId: number;
    displayDepth: number;
    keyword: string;
    rootName: string;
    rootAcronym: string;
};

// グラフノードの定義
export type GraphNode = {
    id: number;
    label: string;
    title: string;
    level: number;
    acronym: string;
    name: string;
    color: string;
};

// グラフエッジの定義
export type GraphEdge = {
    from: number;
    to: number;
};