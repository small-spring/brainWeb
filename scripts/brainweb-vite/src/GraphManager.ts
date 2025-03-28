import { DataSet } from "vis-data";
import { Network } from "vis-network";

import { GraphNode, GraphEdge } from "./types";
import { SearchManager } from "./SearchManager";
import { UIStateManager } from "./UIStateManager";

export class GraphManager {
    private network: Network;
    private allNodes: DataSet<GraphNode>;
    private allEdges: DataSet<GraphEdge>;
    private searchManager: SearchManager;
    private rootId: number;
    private displayDepth: number;
    private descendants: Set<number> = new Set();

    constructor(
        container: HTMLElement,
        allNodes: DataSet<GraphNode>,
        allEdges: DataSet<GraphEdge>,
        private ui: UIStateManager
    ) {
        this.allNodes = allNodes;
        this.allEdges = allEdges;

        const data = { nodes: allNodes, edges: allEdges };
        const options = {
            physics: {
                barnesHut: {
                    gravitationalConstant: -12000,
                    springLength: 100,
                    springConstant: 0.04
                },
                minVelocity: 1.0
            },
            layout: {
                improvedLayout: false
            }
        };

        this.network = new Network(container, data, options);
        this.searchManager = new SearchManager(this.network, this.allNodes);

        const state = this.ui.read();
        this.rootId = state.rootId;
        this.displayDepth = state.displayDepth;

        this.updateRoot(this.rootId);
    }

    updateRoot(newRootId: number): boolean {
        const rootNode = this.allNodes.get(newRootId);

        if (!rootNode) {
            this.updateRootInfo(null);
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

    updateDisplayDepthFromUI(): void {
        const state = this.ui.read();
        this.displayDepth = state.displayDepth;
        this.updateVisibleNodes();
    }

    updateVisibleNodes(): void {
        const visibleNodes = this.allNodes.get().filter(node => this.isNodeVisible(node));

        const visibleNodeIds = new Set(visibleNodes.map(n => n.id));
        const visibleEdges = this.allEdges.get().filter(e => visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to));

        this.network.setData({
            nodes: new DataSet<GraphNode>(visibleNodes),
            edges: new DataSet<GraphEdge>(visibleEdges)
        });

        this.searchManager.updateVisibility(node => this.isNodeVisible(node));
    }

    isNodeVisible(node: GraphNode): boolean {
        return this.descendants.has(node.id) && node.level <= this.displayDepth;
    }

    collectDescendantIds(rootId: number): Set<number> {
        const descendants = new Set<number>();
        const queue = [rootId];

        while (queue.length > 0) {
            const currentId = queue.shift()!;
            descendants.add(currentId);

            this.allEdges.get().forEach(edge => {
                if (edge.from === currentId && !descendants.has(edge.to)) {
                    queue.push(edge.to);
                }
            });
        }

        return descendants;
    }

    updateRootInfo(rootNode: GraphNode | null): void {
        if (!rootNode) {
            this.ui.setRootInfo("does not exist", "");
        } else {
            this.ui.setRootInfo(rootNode.label, rootNode.acronym ?? "");
        }
    }

    focusOnNode(nodeId: number, scale: number = 1.0): void {
        this.network.selectNodes([nodeId]);
        this.network.focus(nodeId, {
            scale,
            animation: { 
                duration: 1000,
                easingFunction: "easeInOutQuad"
            }
        });
    }

    search(keyword: string): void {
        this.searchManager.search(keyword, node => this.isNodeVisible(node));
    }

    prevMatch(): void {
        this.searchManager.prev();
    }
    
    nextMatch(): void {
        this.searchManager.next();
    }
    
    clearSearch(): void {
        this.searchManager.clear();
    }
    
}  


