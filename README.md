- しばらくは [TODO](todo.md) を見ながら作業を進める。
- requirements -> [pyproject.toml](pyproject.toml)
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
1. `web` ディレクトリをダウンロード
2. `brain_graph_interactive.html` をブラウザで開く
3. 以下の操作が可能：
   - Max Level を指定して `Apply` を押すと表示階層を制限
   - 検索もできる

---

## 🎹 キーボードショートカット
WIP

---
## 📷 スクリーンショット（任意）
WIP

---

## 📄 ライセンス
WIP

参考：Allenが
```
Copyright © 2025 Allen Institute for Brain Science. 
Used under CC BY 4.0 license.
```

## 📚 データ出典

本ツールの構造情報（ノード・エッジ）は、Allen Institute 提供の脳構造階層データを使用・再構成しています：

- [Allen Mouse Brain Atlas – Allen Institute for Brain Science](https://portal.brain-map.org/)
- データライセンス: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)


