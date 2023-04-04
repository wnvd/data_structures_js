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

	display() {
		let trv = this.head;
		while (trv) {
			console.log(trv.data);
			trv = trv.next;
		}
	}
}

const list = new dLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.display();
