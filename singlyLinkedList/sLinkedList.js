class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add node to linked list
	push(data) {
		let curr = new Node(data);
		if (!this.head) {
			this.head = curr;
			this.tail = curr;
		} else {
			this.tail.next = curr;
			this.tail = curr;
		}
		this.length++;
		return this;
	}

	// remove last node
	pop() {
		if (!this.head) return undefined;
		let curr = this.head;
		let newTail = curr;
		while (curr.next) {
			newTail = curr;
			curr = curr.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		return curr;
	}

	// removes node at the begining
	shift() {
		if (!this.head) return undefined;

		let curr = this.head;
		this.head = curr.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return curr;
	}

	// display
	display() {
		let curr = this.head;
		// till node exists keep traversing
		while (curr) {
			console.log(curr.data);
			curr = curr.next;
		}
		console.log('----');
	}
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.display();
list.pop();
list.display();
list.shift();
list.display();
