export default class Stack {
	// member varibles :
	// arr  : the implementation of stack
	// top_index  :  the index of current top element

	constructor() {
		this.arr = [];
		this.top_index = -1;
	}

	// push element into stack
	push(element) {
		this.top_index ++;
		this.arr[this.top_index] = element;
	}

	// pop elements at the top and return the value
	pop() {
		if(this.top_index == -1){
			console.log("stack is empty!!");
		}else{
			this.top_index --;
			return this.arr[this.top_index + 1];
		}
	}

	// only returning top element
	peek() {
		if(this.top_index == -1){
			console.log("stack is empty!!");
		}else{
			return this.arr[this.top_index];
		}
	}

	// check if it's empty
	isEmpty() {
		if(this.top_index == -1){
			return true;
		}else{
			return false;
		}
	}

	// return the number of elements
	size() {
		return this.top_index + 1;
	}

	// clear all elements in stack
	clear() {
		this.top_index = -1;
	}

	// print all elements in stack
	print() {
		if(this.top_index == -1){
			console.log("stack is empty!!");
		}
		for(let i = this.top_index; i >= 0; i --){
			console.log(this.arr[i]);
		}
	}
}
