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
				if (data === curr.data) return undefined;

				if (data < curr.data) {
					if (curr.left === null) {
						curr.left = newNode;
						return this;
					} else {
						curr = curr.left;
					}
				} else if (data > curr.value) {
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

	contains(data) {
		if (!this.root) {
			return false;
		}
		let curr = this.root,
			found = false;
		while (curr && !found) {
			if (data < curr.data) {
				curr = curr.left;
			} else if (data > curr.data) {
				curr = curr.right;
			} else {
				return true;
			}
		}
		return false;
	}
}
