// // prototypal inheritance
// function MinStack() {
//   this.stack = []; //holds value of the stack
//   this.minStack = [Infinity]; //holds min values encountered so far
// }

// //methods:
// MinStack.prototype.push = function(val) {
//   this.stack.push(val);
//   this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
// };

// MinStack.prototype.pop = function() {
//   this.stack.pop();
//   this.minStack.pop();
// };

// MinStack.prototype.top = function() {
//   return this.stack[this.stack.length - 1];
// };

// MinStack.prototype.getMin = function() {
//   return this.minStack[this.minStack.length - 1];
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//Class
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
