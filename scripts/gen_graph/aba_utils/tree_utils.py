def find_node_by_id(node, target_id):
    """
    Recursively search for a node with the given ID in the ABA structure tree.

    Args:
        node (dict): The current node to search from.
        target_id (int): The ID of the target structure.

    Returns:
        dict or None: The node dict if found, otherwise None.
    """
    if node["id"] == target_id:
        return node
    for child in node.get("children", []):
        result = find_node_by_id(child, target_id)
        if result:
            return result
    return None

def collect_nodes_and_edges(node, base_level, level_limit, nodes, edges):
    """
    Recursively collect nodes and edges from the ABA structure tree
    within a specified depth from the base level.

    Adds each valid node to the `nodes` list, and creates an edge from
    parent to child in the `edges` list.

    Args:
        node (dict): The current node to process.
        base_level (int): The st_level of the root node (used to compute relative depth).
        level_limit (int): Maximum depth from base_level to include.
        nodes (list): List to accumulate node dicts for JS export.
        edges (list): List to accumulate edge dicts for JS export.
    """
    current_level = node.get("st_level", 0)
    relative_level = current_level - base_level
    if relative_level < 0 or relative_level > level_limit:
        return

    nodes.append({
        "id": node["id"],
        "label": node["name"],
        "level": relative_level,
        "color": f"#{node.get('color_hex_triplet', 'CCCCCC')}",
        "title": f"{node.get('acronym', '')} (Level {relative_level})"
    })

    for child in node.get("children", []):
        collect_nodes_and_edges(child, base_level, level_limit, nodes, edges)
        edges.append({"from": node["id"], "to": child["id"]})
