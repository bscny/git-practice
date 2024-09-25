export default class Stack {
    // member varibles :
    // arr  : the implementation of stack
    // top_index  :  the index of current top element

    constructor() {
        this.arr = [];
    }

    // push element into stack
    push(element) {
        this.arr.push(element);
    }

    // pop elements at the top and return the value
    pop() {
        return this.arr.pop();
    }

    // only returning top element
    peek() {
        return this.arr.at(this.arr.length - 1);
    }

    // check if it's empty
    isEmpty() {
        if(this.arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // return the number of elements
    size() {	
        return this.arr.length;
    }

    // clear all elements in stack
    clear() {
        this.arr.length = 0;
    }

    // print all elements in stack
    print() {
        if(this.arr.length == 0) {
            console.log();
        } else {
            for(let i = this.arr.length - 1; i >= 0; i --) {
                console.log(this.arr[i]);
            }
        }

    }
}
