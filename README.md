- しばらくは [TODO](todo.md) を見ながら作業を進める。
- requirements -> [pyproject.toml](pyproject.toml)
- vis.jsを利用 [link](https://github.com/visjs/vis-network)

以下ChatGPTが書いたやつ

↓


--- 
# 🧠 脳構造インタラクティブビューア

このツールは、[Allen Brain Atlas](https://portal.brain-map.org/) の JSON データをもとに、脳構造の階層をインタラクティブに可視化するウェブアプリです。

## 🚀 主な機能

- 脳構造の階層グラフを動的に表示
- `Max Level` を指定して深さを制限
- 構造名・略称による検索
- 検索結果のノードに自動フォーカス
- 現在表示されていないノードはグレー表示＆非アクティブ
- キーボード操作対応
- モバイルでも快適なレスポンシブデザイン

---

## 🗂 ファイル構成

```
.
├── brain_graph_interactive.html    # メインHTML
├── logic.js                        # UI/操作ロジック（検索、フィルタなど）
├── style.css                       # スタイル（.invisible の定義など）
├── ../output/nodes.js              # 自動生成されたノードデータ
├── ../output/edges.js              # 自動生成されたエッジデータ
```

> `nodes.js` と `edges.js` は、Allen Brain Atlas の構造 JSON を Python で変換して生成します（スクリプトは別途）。

---

## 🖥 使い方

1. このディレクトリをローカルで開く（またはサーバーに配置）
2. `nodes.js`, `edges.js`, `logic.js`, `style.css` を正しく読み込めるように配置
3. `brain_graph_interactive.html` をブラウザで開く
4. 以下の操作が可能：

   - 🔍 検索ボックスにキーワードを入力し `Enter`
   - ⬅️➡️で一致するノード間を移動
   - Escで検索クリア
   - Max Level を指定して `Apply` を押すと表示階層を制限

---

## 🎹 キーボードショートカット

| キー         | 動作                 |
|--------------|----------------------|
| `Enter`      | 検索を実行           |
| `← / ↑`      | 前のマッチへ移動     |
| `→ / ↓`      | 次のマッチへ移動     |
| `Esc`        | 検索をクリア         |

---

## 🧩 カスタマイズポイント

- `style.css` でスタイル調整（色、フォントなど）
- `logic.js` の `isVisible()` を編集すれば表示ルールを変更可能
- ノード選択時の動作やアニメーションを変更することも可能

---

## 📷 スクリーンショット（任意）

![screenshot](screenshot.png)

---

## 📄 ライセンス
Copyright © 2025 Allen Institute for Brain Science. 
Used under CC BY 4.0 license.


## 📚 データ出典

このツールは以下のデータを元に構築されています：

- [Allen Mouse Brain Atlas – Allen Institute for Brain Science](https://portal.brain-map.org/)
- データライセンス: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

本ツールの構造情報（ノード・エッジ）は、Allen Institute 提供の脳構造階層データを使用・再構成しています。
