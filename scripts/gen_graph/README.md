






## aba_structures.json
- ダウンロード元
  - Allen Brain Atlas API（構造ツリー取得）
  - Mouse Brain Atlas Ontology’s StructureGraph 
  - https://api.brain-map.org/api/v2/structure_graph_download/1.json

- 拡張案    
  - Humanのやつに拡張する。

- 参考
  - https://community.brain-map.org/t/downloading-an-ontologys-structure-graph/2880

### フィールド
| aba_structures.json                | nodes.js       | 説明                                                                                          | 値の例      |
|---------------------|-----------------|-----------------------------------------------------------------------------------------------|-------------|
| `id`                | id             | 一意の識別子                                                                                  | `8`         |
| `atlas_id`          | _(not used)_   | レガシー（旧式）のフィールド。詳細は[こちら](https://community.brain-map.org/t/what-is-the-meaning-of-atlas-id-and-st-level-in-1-json/895)を参照。 | `1`         |
| `ontology_id`       | _(not used)_   | 構造体が属するオントロジーのID。すべて`1`で、マウスの構造を示す。                               | `1`         |
| `acronym`           | acronym        | 構造体の略称。                                                                                 | `"grey"`    |
| `name`              | name           | 構造体の正式名称。                                                                             | `"Basic cell groups and regions"` |
| `color_hex_triplet` | color          | 構造体に関連付けられたカラーコード（16進数）。                                                 | `"BFDAE3"`  |
| `graph_order`       | _(not used)_   | 構造体をフラットなリストとして並べる際の順序を示す番号。                                       | `1`         |
| `st_level`          | level          | グラフ内での階層レベルを示す番号。 max 11。 | `1`         |
| `hemisphere_id`     | hemisphere_id  | 脳の半球を示すID。                                                                             | `3`         |
| `parent_structure_id`| _(not used)_   | 親構造体のID。                                                                                 | `997`       |
| `children`          | _(not used)_   | 子構造体のリスト。                                                                             | 子構造体が続く |
