function prim(adjacencyList){
    const distanceList = adjacencyList.map(v => ({distance: Number.POSITIVE_INFINITY, parent: null}));
    const intree = adjacencyList.map(v => false);

    distanceList[0].distance = 0;

    const findMin = () => {
        let minDist = Number.POSITIVE_INFINITY;
        let minVertexIndex;
        distanceList.forEach((v, i) => {
            if(intree[i] === false && v.distance < minDist){
                minDist = v.distance;
                minVertexIndex = i;
            }
        });
        return minVertexIndex;
    };

    for(let i = 0; i < adjacencyList.length; i++){
        const minVertexIndex = findMin();
        intree[minVertexIndex] = true;
        const newEdges = adjacencyList[minVertexIndex].filter(e => !intree[e.toVertex]);
        newEdges.forEach(e => {
            if(e.weight < distanceList[e.toVertex].distance){
                distanceList[e.toVertex].distance = e.weight;
                distanceList[e.toVertex].parent = minVertexIndex;
            }
        });
    }

    return distanceList.reduce((acc, val, index) => {
        if(val.parent !== null){
            acc.push([val.parent, index]);
        }
        return acc;
    }, []);
    

}

class Edge{
    constructor(toVertex, weight){
        this.toVertex = toVertex;
        this.weight = weight;
    }
}

let adjacencyList = [
    [new Edge(1, 4), new Edge(7, 8)],
    [new Edge(0, 4), new Edge(7, 11), new Edge(2, 8)],
    [new Edge(1, 8), new Edge(8, 2), new Edge(5, 4), new Edge(3, 7)],
    [new Edge(2, 7), new Edge(5, 14), new Edge(4, 9)],
    [new Edge(3, 9), new Edge(5, 10)],
    [new Edge(4, 10), new Edge(3, 14), new Edge(2, 4), new Edge(6, 2)],
    [new Edge(8, 6), new Edge(5, 2), new Edge(7, 1)],
    [new Edge(0, 8), new Edge(1, 11), new Edge(8, 7), new Edge(6, 1)],
    [new Edge(2, 2), new Edge(7, 7), new Edge(6, 6)]
];

console.log(prim(adjacencyList));