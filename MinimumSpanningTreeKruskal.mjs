function kruskal(graph){
    const edgeList = [...graph.edgeList];
    edgeList.sort((e1, e2) => e1.weight - e2.weight);
    
    const includedVerticies = new Set();
    const subsets = Array(graph.vertexCount).fill(1).map((v, i) => new Subset(i));

    const findRootWithPathCompression = (index) => {
        // path compression while finding root
        while(subsets[index].parent !== subsets[subsets[index].parent].parent){
            subsets[index].parent = subsets[subsets[index].parent].parent;
            index = subsets[index].parent;
        }
        return subsets[index].parent;
    };

    /*
    const union = (v1, v2) => {
        const root1 = findRootWithPathCompression(v1);
        const root2 = findRootWithPathCompression(v2);
        if(subsets[root1].rank >= subsets[root2].rank){
            subsets[root2].parent = root1;
            subsets[root1].rank += 1;
        }
        else{
            subsets[root1].parent = root2;
            subsets[root2].rank += 1;
        }
    };
    */

    const union = (root1, root2) => {
        if(subsets[root1].rank >= subsets[root2].rank){
            subsets[root2].parent = root1;
            subsets[root1].rank += 1;
        }
        else{
            subsets[root1].parent = root2;
            subsets[root2].rank += 1;
        }
    };

    const includedEdges = [];
    for(let edge of edgeList){
        const root1 = findRootWithPathCompression(edge.v1);
        const root2 = findRootWithPathCompression(edge.v2);

        if(root1 !== root2){
            includedEdges.push(edge);
            union(root1, root2);
        }

        if(includedEdges.length === graph.vertexCount - 1) break;
    }
    return includedEdges;
}

class Subset{
    constructor(parent){
        this.parent = parent;
        this.rank = 0;
    }
}

class Graph{
    constructor(vertexCount, edgeList){
        this.vertexCount = vertexCount;
        this.edgeList = edgeList;
    }
}

class Edge{
    constructor(v1, v2, weight){
        this.v1 = v1;
        this.v2 = v2;
        this.weight = weight;
    }
}

let edgeList = [
    new Edge(0, 1, 4),
    new Edge(0, 7, 8),
    new Edge(1, 7, 11),
    new Edge(1, 2, 8),
    new Edge(7, 8, 7),
    new Edge(7, 6, 1),
    new Edge(6, 8, 6),
    new Edge(2, 8, 2),
    new Edge(2, 5, 4),
    new Edge(6, 5, 2),
    new Edge(2, 3, 7),
    new Edge(3, 5, 14),
    new Edge(3, 4, 9),
    new Edge(4, 5, 10)
];

let graph = new Graph(9, edgeList);

console.log(kruskal(graph));