import { Network, DataSet } from "vis";
import { GraphNode } from "./types";

export class SearchManager {
    private results: GraphNode[] = [];
    private currentIndex: number = 0;
    private visibleIndices: number[] = [];

    constructor(
        private network: Network,
        private allNodes: DataSet<GraphNode>
    ) {}

    search(keyword: string, isNodeVisible: (node: GraphNode) => boolean): void {
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

    updateVisibility(isNodeVisible: (node: GraphNode) => boolean): void {
        if (this.results.length > 0) {
            this.updateUI(isNodeVisible);
        }
    }

    private updateUI(isNodeVisible: (node: GraphNode) => boolean): void {
        const matchStatus = document.getElementById("matchStatus") as HTMLElement | null;
        const matchList = document.getElementById("matchList") as HTMLElement | null;
        if (!matchStatus || !matchList) return;

        matchList.innerHTML = "";
        this.visibleIndices = [];

        matchStatus.textContent = `${this.currentIndex + 1} / ${this.results.length} matches`;

        this.results.forEach((node, idx) => {
            const visible = isNodeVisible(node);
            if (visible) this.visibleIndices.push(idx);
            matchList.appendChild(this.createListItem(node, visible, idx));
        });
    }

    private createListItem(node: GraphNode, visible: boolean, index: number): HTMLLIElement {
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

    private focusOnCurrent(): void {
        if (this.results.length === 0 || this.currentIndex < 0) return;

        const node = this.results[this.currentIndex];
        this.network.selectNodes([node.id]);
        this.network.focus(node.id, {
            scale: 1.5,
            animation: {
                duration: 500,
                easingFunction: "easeInOutQuad"
            }
        });

        const items = document.querySelectorAll("#matchList li");
        items.forEach((li, idx) => {
            li.classList.toggle("selected", idx === this.currentIndex);
        });
    }

    prev(): void {
        if (this.visibleIndices.length === 0) return;
        const currentVisibleIndex = this.visibleIndices.indexOf(this.currentIndex);
        const prevIndex = (currentVisibleIndex - 1 + this.visibleIndices.length) % this.visibleIndices.length;
        this.currentIndex = this.visibleIndices[prevIndex];
        this.focusOnCurrent();
    }

    next(): void {
        if (this.visibleIndices.length === 0) return;
        const currentVisibleIndex = this.visibleIndices.indexOf(this.currentIndex);
        const nextIndex = (currentVisibleIndex + 1) % this.visibleIndices.length;
        this.currentIndex = this.visibleIndices[nextIndex];
        this.focusOnCurrent();
    }

    clear(): void {
        this.results = [];
        this.currentIndex = 0;
        this.visibleIndices = [];

        const searchBox = document.getElementById("searchBox") as HTMLInputElement | null;
        const matchStatus = document.getElementById("matchStatus");
        const matchList = document.getElementById("matchList");
        if (searchBox) searchBox.value = "";
        if (matchStatus) matchStatus.textContent = "";
        if (matchList) matchList.innerHTML = "";

        this.network.unselectAll();
    }

    private showNoMatchMessage(): void {
        const matchStatus = document.getElementById("matchStatus");
        const matchList = document.getElementById("matchList");
        if (matchStatus) matchStatus.textContent = "No match";
        if (matchList) matchList.innerHTML = "";
    }
}