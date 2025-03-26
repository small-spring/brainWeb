"""
Generate visualization data from Allen Brain Atlas JSON.

Usage:
1. Run this script from the scripts/gen_graph directory:
   > cd scripts/gen_graph
   > python gen_interactive.py

Input:
  - aba_structures.json: Allen Brain Atlas structure data
  - START_ID: Root node ID to start traversal (default: 8)
  - LEVEL_LIMIT: Maximum depth of traversal (default: 10)

Output:
  - web/data/nodes.js: Node data with IDs, labels, and levels
  - web/data/edges.js: Edge data representing parent-child relationships

Format:
  JavaScript files containing vis.js DataSet objects for network visualization

Dependencies:
  - aba_utils.py: Helper functions for traversing the brain structure tree
"""

import json
from aba_utils import find_node_by_id, collect_nodes_and_edges

# ---------------------
# Configuration
# ---------------------
JSON_PATH = "./aba_structures.json"
START_ID = 8
LEVEL_LIMIT = 10 # todo include LEVEL_LIMIT in the output
OUTPUT_NODES_PATH = "../web/data/nodes.js"
OUTPUT_EDGES_PATH = "../web/data/edges.js"

# ---------------------
# Load ABA JSON data
# ---------------------
with open(JSON_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

nodes = []
edges = []

root = data["msg"][0]
start_node = find_node_by_id(root, START_ID)

if start_node:
    BASE_LEVEL = start_node["st_level"]
    collect_nodes_and_edges(start_node, BASE_LEVEL, LEVEL_LIMIT, nodes, edges)

    with open(OUTPUT_NODES_PATH, "w", encoding="utf-8") as f:
        f.write("const allNodes = new vis.DataSet(" + json.dumps(nodes, indent=2) + ");\n")

    with open(OUTPUT_EDGES_PATH, "w", encoding="utf-8") as f:
        f.write("const allEdges = new vis.DataSet(" + json.dumps(edges, indent=2) + ");\n")

    print("✅ JS files generated:")
    print(" -", OUTPUT_NODES_PATH)
    print(" -", OUTPUT_EDGES_PATH)
else:
    print(f"Structure ID {START_ID} not found.")
