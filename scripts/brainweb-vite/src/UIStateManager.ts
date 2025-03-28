import { UIState } from "./types"; // UIState 型だけ使う（必要なら分離してもOK）

export class UIStateManager {
    private state: UIState = {
        rootId: 0,
        displayDepth: 1,
        keyword: "",
        rootName: "",
        rootAcronym: ""
    };

    read(): UIState {
        const rootInput = document.getElementById("rootId") as HTMLInputElement | null;
        const levelInput = document.getElementById("levelInput") as HTMLInputElement | null;
        const searchInput = document.getElementById("searchBox") as HTMLInputElement | null;

        if (rootInput) this.state.rootId = parseInt(rootInput.value);
        if (levelInput) this.state.displayDepth = parseInt(levelInput.value);
        if (searchInput) this.state.keyword = searchInput.value;

        return this.state;
    }

    updateDisplay(): void {
        const nameElement = document.getElementById("rootName") as HTMLElement | null;
        const acronymElement = document.getElementById("rootAcronym") as HTMLElement | null;

        if (nameElement) nameElement.textContent = this.state.rootName;
        if (acronymElement) acronymElement.textContent = this.state.rootAcronym;
    }

    setRootInfo(label: string, acronym: string): void {
        this.state.rootName = label;
        this.state.rootAcronym = acronym;
        this.updateDisplay();
    }

    getState(): UIState {
        return this.state;
    }
}
