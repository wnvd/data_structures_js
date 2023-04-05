// stack using class
class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.prev = temp;
		}
		this.size++;
		return newNode;
	}

	display() {
		let curr = this.first;
		while (curr) {
			console.log(curr.value);
			curr = curr.prev;
		}

		console.log('...');
		console.log(`peek: ${this.first.value}`);
	}
}

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.display();
