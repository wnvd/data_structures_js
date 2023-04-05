class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.back = null;
		this.size = 0;
	}

	enqueue(data) {
		let eNode = new Node(data);
		if (this.size === 0) {
			this.front = data;
			this.back = data;
		} else {
			this.back.next = eNode;
			this.back = eNode;
		}
		this.size++;

		return eNode;
	}
}
