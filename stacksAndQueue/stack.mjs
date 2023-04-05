// stack using class
class Node {
	contructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		if (this.size === 0) {
			let newNode = new Node(value);
			this.first = newNode;
			this.last = newNode;
			this.size++;
		}
	}
}
