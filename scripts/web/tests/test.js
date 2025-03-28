// test of collectDescendantIds.

/**
 * 指定されたノードの子孫のIDを収集する
 * @param {number} rootId - ルートノードのID
 * @param {vis.DataSet} edges - エッジのデータセット
 * @returns {Set<number>} - 子孫ノードのIDのセット
 */
function collectDescendantIds(rootId, edges) {
    const descendants = new Set();
    const queue = [rootId];

    while (queue.length > 0) {
        const currentId = queue.shift();
        descendants.add(currentId);

        edges.get().forEach(edge => {
            if (edge.from === currentId && !descendants.has(edge.to)) {
                queue.push(edge.to);
            }
        });
    }

    return descendants;
}



const testEdges = {
    get: () => [
        { from: 997, to: 998 },
        { from: 997, to: 999 },
        { from: 998, to: 1000 },
    ]
};

function testCollectDescendantIds(rootId, testEdges) {
    const descendants = collectDescendantIds(rootId, testEdges);
    console.log('収集された子孫:', Array.from(descendants));
    console.log('子孫の数:', descendants.size);
}

testCollectDescendantIds(997, testEdges);   // 997, 998, 999, 1000
testCollectDescendantIds(998, testEdges);   // 998, 1000
testCollectDescendantIds(999, testEdges);   // 999