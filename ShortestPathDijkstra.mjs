function dijkstra(adjacencyList, source, target){
    let distanceList = adjacencyList.map(e => ({distance: Number.POSITIVE_INFINITY, parent: null}));
    let processedVerticies = adjacencyList.map(v => false);
    distanceList[source] = {distance: 0, parent: source};
    
    const findMinDistVertex = () => {
        let minDist = Number.POSITIVE_INFINITY;
        let minVertex = null;
        for(let i = 0; i < adjacencyList.length; i++){
            if(processedVerticies[i]) continue;
            if(distanceList[i].distance < minDist){
                minDist = distanceList[i].distance;
                minVertex = i;
            }
        }
        return minVertex;
    };

    const getPath = () => {
        let path = [];
        let currentVertex = target;
        while(currentVertex !== source){
            path.unshift(currentVertex);
            currentVertex = distanceList[currentVertex].parent;
        }
        path.unshift(source);
        return path;
    };

    while(processedVerticies[target] == false){
        let minDistVertex = findMinDistVertex();
        processedVerticies[minDistVertex] = true;
        let distance = distanceList[minDistVertex].distance;

        let edges = adjacencyList[minDistVertex];
        for(let edge of edges){
            let altDist = distance + edge.distance;
            if(altDist < distanceList[edge.vertex].distance){
                distanceList[edge.vertex].distance = altDist;
                distanceList[edge.vertex].parent = minDistVertex;
            }
        }
    }

    //return distanceList[target].distance;
    return getPath();
}

class Edge{
    constructor(v, d){
        this.vertex = v;
        this.distance = d;
    }
}

let graph = [
    [new Edge(1, 2), new Edge(2, 4)],
    [new Edge(2, 1), new Edge(4, 2), new Edge(3, 4)],
    [new Edge(4, 3)],
    [new Edge(5, 2)],
    [new Edge(3, 3), new Edge(5, 2)],
    []
];

// expect [0, 1, 4, 5]
console.log(dijkstra(graph, 0, 5));