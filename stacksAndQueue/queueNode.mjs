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
			this.front = eNode;
			this.back = eNode;
		} else {
			this.back.next = eNode;
			this.back = eNode;
		}
		this.size++;

		return eNode;
	}
	deQueue() {
		if (this.size === 0) return null;

		let dNode = this.front;
		this.front = this.front.next;

		this.size--;
		return dNode;
	}

	// for debug
	display() {
		let curr = this.front;
		while (curr) {
			console.log(curr.data);
			curr = curr.next;
		}
		console.log('---');
	}
}

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.display();
newQueue.deQueue();
newQueue.display();
newQueue.enqueue(4);
newQueue.display();
