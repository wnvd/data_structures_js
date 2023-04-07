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
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		var current = this.root;
		while (true) {
			if (data === current.data) return undefined;
			if (data < current.data) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
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
	bfs() {
		let node = this.root,
			data = [],
			queue = [];
		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.data);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		console.log(data);
		return data;
	}
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.bfs();
