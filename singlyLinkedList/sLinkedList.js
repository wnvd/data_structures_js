class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class singlyLinkedList {
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

		return;
	}
}

const list = new singlyLinkedList();
list.push(1);
list.push(2);
