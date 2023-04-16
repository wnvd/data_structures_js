class maxHeapBinary {
	constructor() {
		this.values = [];
	}
	insert(el) {
		this.values.push(el);
		this.bubbleUp();
	}
	// bubble-down, adjust, remove
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		// relace max with recent added element
		this.values[0] = end;
		// bubble down
		this.sinkDown();
		return max;
	}
	sinkDown() {
		// doesnt work
		let idx = 0;
		const length = this.values.length;
		const el = this.values[0];
		while (true) {
			let lChildIdx = 2 * idx + 1;
			let rChildIdx = 2 * idx + 2;
			let lChild, rChild;
			let swap = null;

			if (lChildIdx < length) {
				lChild = this.values[lChildIdx];
				if (lChild > el) {
					swap = lChildIdx;
				}
			}
			if (rChildIdx < length) {
				rChild = this.values[rChildIdx];
				if (
					(swap === null && rChild > el) ||
					(swap !== null && rChild > lChild)
				) {
					swap = rChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = el;
		}
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const el = this.values[idx];
		while (idx > 0) {
			let prIdx = Math.floor((idx - 1) / 2);
			let pr = this.values[prIdx];
			if (el < pr) break;

			this.values[prIdx] = el;
			this.values[idx] = pr;
			idx = prIdx;
		}
	}
	display() {
		console.log(this.values);
	}
}
const heap = new maxHeapBinary();
heap.insert(3);
heap.insert(5);
heap.insert(6);
heap.insert(8);
heap.insert(9);
heap.insert(23);
heap.display();
heap.extractMax();
heap.display();
