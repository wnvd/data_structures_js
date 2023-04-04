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
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;

		return oldHead;
	}

	// add node at the begining
	unshift(data) {
		let newHead = new Node(data);
		if (!this.head) {
			this.head = newHead;
			this.tail = newHead;
		} else {
			newHead.next = this.head;
			this.head.prev = newHead;
			this.head = newHead;
		}
		this.length++;

		return this;
	}

	// get node a given index
	get(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		let node, count;
		let mid = Math.floor((this.length - 1) / 2);
		if (index < mid) {
			node = this.head;
			count = 0;
			while (count != index) {
				node = node.next;
				count++;
			}
			// console.log(node.data);
		} else {
			node = this.tail;
			count = this.length - 1;
			while (count != index) {
				node = node.prev;
				count--;
			}
			// console.log(node.data);
		}
		return node;
	}

	// set node value at the given index
	set(index, data) {
		let nodeReturned = this.get(index);
		if (nodeReturned) {
			nodeReturned.data = data;
			return true;
		}
		return false;
	}

	// insert a node at a given index
	insert(index, data) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (index === 0) return this.unshift(data);

		let curr = this.get(index);
		let newNode = new Node(data);
		if (curr) {
			newNode.next = curr;
			newNode.prev = curr.prev;
			curr.prev.next = newNode;
			curr.prev = newNode;

			this.length++;
			return true;
		}
		return false;
	}

	// remove node at a given index
	remove(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let fNode = this.get(index);
		let pNode = fNode.prev;
		let nNode = fNode.next;
		if (fNode) {
			pNode.next = nNode;
			nNode.prev = pNode;
			fNode.next = null;
			fNode.prev = null;
			this.length--;
		}
		return fNode;
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
list.push(4);
// list.display();
// list.shift();
// list.display();
// list.unshift(0);
// list.display();
// list.get(1);
// list.get(2);
// list.display();
// list.set(0, 'updated');
list.display();
list.insert(1, 'x');
list.insert(5, 'y');
list.display();
list.remove(1);
list.display();
