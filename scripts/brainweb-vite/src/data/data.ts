import { DataSet } from "vis";
import { GraphNode, GraphEdge } from "../types"; // ← 相対パス注意！
import { nodes } from "./nodes";
import { edges } from "./edges";

export const allNodes = new DataSet<GraphNode>(nodes);
export const allEdges = new DataSet<GraphEdge>(edges);
