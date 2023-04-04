class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class dLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(data) {
		let node = new Node(data);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;

		return this;
	}

	// remove node from the end
	pop() {
		if (!this.head) return undefined;
		let removedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removedNode.prev;
			this.tail.nexl = null;
			removedNode.prev = null;
		}
		this.length--;

		return removedNode;
	}

	// remove node at the begining
	shift() {
		if (!this.head) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		this.head = oldHead.next;
		this.head.prev = null;
		oldHead.next = null;
		this.length--;

		return oldHead;
	}
	display() {
		let trv = this.head;
		while (trv) {
			console.log(trv.data);
			trv = trv.next;
		}
		console.log('---');
	}
}

const list = new dLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.display();
list.shift();
list.display();
