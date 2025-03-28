// NodeUtils.js
export function collectDescendantIds(rootId, allEdges) {
    const descendants = new Set();
    const queue = [rootId];

    while (queue.length > 0) {
        const currentId = queue.shift();
        descendants.add(currentId);

        allEdges.get().forEach(edge => {
            if (edge.from === currentId && !descendants.has(edge.to)) {
                queue.push(edge.to);
            }
        });
    }

    return descendants;
}

export function isWithinLevel(node, baseLevel, levelLimit) {
    return node.level <= baseLevel + levelLimit;
}

export function isDisplayedInGraph(node, visibleNodeIdSet, baseLevel, levelLimit) {
    return visibleNodeIdSet.has(node.id) && isWithinLevel(node, baseLevel, levelLimit);
}