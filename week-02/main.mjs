import Stack from './stack.mjs';

let stack = new Stack();
// print when theres nothing
stack.print();

// basic push
stack.push(5);
stack.push(8);
stack.print();

// testing clear()
stack.clear();

// testing clear() after already clear()
stack.clear();

console.log("------------");
//-------------------------- new stack :

stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(62);

stack.print();
console.log();

// testing push and pop in each tern
stack.push(100);
stack.pop();

console.log(stack.peek());

stack.push(0);
stack.push(0);
stack.pop();

console.log(stack.peek() + "\n");

// testing size()
console.log(stack.size() + "\n");

// testing pop till the end
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop() + "\n");

// testing isEmpty
console.log(stack.isEmpty());
stack.push(1000);
console.log(stack.isEmpty());
