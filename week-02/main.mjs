import Stack from './stack.mjs';

let stack = new Stack();
// print when theres nothing
stack.print();

// basic push
console.log("------------ basic stack: pushing 5 8");
stack.push(5);
stack.push(8);
stack.print();

// testing clear()
stack.clear();

// testing clear() after already clear()
stack.clear();

console.log("------------ new stack: pushing 5 4 3 2 62");
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
console.log("pushing 100");
console.log("pop: " + stack.pop());

console.log("peek: " + stack.peek());

console.log("pushing 0");
console.log("pushing 0");
stack.push(0);
stack.push(0);
console.log("pop: " + stack.pop());

console.log("peek: " + stack.peek());

// testing size()
console.log("current size: " + stack.size() + "\n");

// testing pop till the end
console.log("start poping till the end:\n");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop() + "\n");

// testing isEmpty
console.log("testing empty:\n");
console.log(stack.isEmpty());
stack.push(1000);
console.log(stack.isEmpty());
