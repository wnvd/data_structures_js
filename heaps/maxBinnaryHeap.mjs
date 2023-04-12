class maxHeapBinary {
	constructor() {
		this.values = [];
	}
	insert(el) {
		this.values.push(el);
		this.bubbleUp();
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
