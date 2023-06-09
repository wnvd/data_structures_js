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

	// adding a new node at the begining
	unshift(data) {
		let newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	// getting item at the given index
	get(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		let count = 0;
		let trvNode = this.head;
		while (count !== index) {
			trvNode = trvNode.next;
			count++;
		}
		// to dispay node data
		// console.log(trvNode.data);
		return trvNode;
	}

	// changing value at given index
	set(index, data) {
		if (index < 0 || index >= this.length) return undefined;
		// getting node frem get function
		let newNode = this.get(index);
		if (newNode) {
			newNode.data = data;
			return true;
		}
		return false;
	}

	// insert node at a given position
	insert(index, value) {
		if (index < 0 || index > this.length) return undefined;
		if (index === this.length) return this.push(value);
		if (index == 0) return this.unshift(value);

		let nodeToInsert = new Node(value);
		let pre = this.get(index - 1);
		nodeToInsert.next = pre.next;
		pre.next = nodeToInsert;
		this.length++;

		return true;
	}

	// remove node to given index
	remove(index) {
		if (index < 0 || index > this.length) return null;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let nodeBefore = this.get(index - 1);
		let removeNode = nodeBefore.next;
		nodeBefore.next = removeNode.next;
		this.length--;

		return removeNode;
	}

	// Reverse node
	reverse() {
		let curr = this.head;
		this.head = this.tail;
		this.tail = curr;
		let next = null;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		return this;
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
// list.display();
// list.pop();
// list.display();
// list.shift();
// list.display();
// list.unshift(0);
// list.display();
// list.get(3);
// list.set(3, 'data changed');
// list.display();
// list.insert(2, 'inserted node');
// list.display();
// list.remove(2);
list.display();
list.reverse();
list.display();
