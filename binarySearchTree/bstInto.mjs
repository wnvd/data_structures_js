class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let curr = this.root;
			while (true) {
				// for duplicated
				if (value === curr.value) return undefined;

				if (value < curr.value) {
					if (curr.lef === null) {
						curr.left = newNode;
						return this;
					} else {
						curr = curr.left;
					}
				} else if (value > curr.value) {
					if (curr.right === null) {
						curr.right = newNode;
						return this;
					} else {
						curr = curr.right;
					}
				}
			}
		}
	}
}
