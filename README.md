site -> [https://small-spring.github.io/brainWeb/](https://small-spring.github.io/brainWeb/)
- しばらくは [TODO](todo.md) を見ながら作業を進める。
- vis.jsを利用 [link](https://github.com/visjs/vis-network)

--- 
# 🧠 脳構造インタラクティブビューア

このツールは、[Allen Brain Atlas](https://portal.brain-map.org/) の JSON データをもとに、脳構造の階層をインタラクティブに可視化するウェブアプリです。

## 🚀 主な機能

- 脳構造の階層グラフを動的に表示
- `Max Level` を指定して深さを制限
- 構造名・略称による検索
  - 検索結果のノードに自動フォーカス
  
---

## 🗂 ファイル構成
WIP
> `nodes.js` と `edges.js` は、Allen Brain Atlas の構造 JSON を Python で変換して生成します（スクリプトは別途）。

---

## 🖥 使い方
WIP

---

## 🎹 キーボードショートカット
WIP

---
## 📷 スクリーンショット（任意）
WIP

---


## 📖 References

本ツールの構造情報（ノード・エッジ）は、Allen Institute 提供の脳構造階層データを使用・再構成しています：

- Allen Institute for Brain Science. (2004). Allen Mouse Brain Atlas [dataset]. Available from: https://mouse.brain-map.org
- Allen Institute for Brain Science. (2011). Allen Reference Atlas – Mouse Brain [brain atlas]. Available from: https://atlas.brain-map.org
- Daigle, T. L., et al. (2018). A suite of transgenic driver and reporter mouse lines with enhanced brain-cell-type targeting and functionality. Cell, 174(2), 465–480.e22. https://doi.org/10.1016/j.cell.2018.06.035
- Lein, E. S., et al. (2007). Genome-wide atlas of gene expression in the adult mouse brain. Nature, 445, 168–176. https://doi.org/10.1038/nature05453
- Harris, J. A., et al. (2019). Hierarchical organization of cortical and thalamic connectivity. Nature, 575, 195–202. https://doi.org/10.1038/s41586-019-1716-z
- Oh, S. W., et al. (2014). A mesoscale connectome of the mouse brain. Nature, 508, 207–214. https://doi.org/10.1038/nature13186
