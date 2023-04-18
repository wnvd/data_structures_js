class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
	}

	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}

	removeVertex(vertex) {
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
	}

	depthFirstRecursive(start){
		const result = [];
		const visited = {};
		
		const adjacencyList = this.adjacencyList;
		(function dfsHelper(vertex){
			if(!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach(neighbour =>{
				if(!visited[neighbour]){
					return dfsHelper(neighbour);
				}
			})
		})(start)
		console.log(result);	
		return result;
	}
	display() {
		console.log(this.adjacencyList);
	}
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Kyoto');
g.addEdge('Tokyo', 'Kyoto');
// g.removeEdge('Tokyo', 'Kyoto');
g.removeVertex('Tokyo');
g.display();

// tree traverse
const g2 = new Graph();
g2.addVertex("A");
g2.addVertex("B");
g2.addVertex("C");
g2.addVertex("D");
g2.addVertex("E");
g2.addVertex("F");

g2.addEdge("A", "B");
g2.addEdge("A", "C");
g2.addEdge("B", "D");
g2.addEdge("C", "E");
g2.addEdge("D", "E");
g2.addEdge("D", "F");
g2.addEdge("E", "F");
g2.depthFirstRecursive("A");