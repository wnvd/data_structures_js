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
