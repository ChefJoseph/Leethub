/**
 * @param {number} k
 */

 // prototypal inheritance

// function MyCircularQueue(k) {
//   this.queue = new Array(k);
//   this.head = -1;
//   this.tail = -1;
// }

// MyCircularQueue.prototype.enQueue = function(value) {
//   if (this.isFull()) {
//     return false;
//   }
//   if (this.isEmpty()) {
//     this.head = 0;
//   }
//   this.tail = (this.tail + 1) % this.queue.length;
//   this.queue[this.tail] = value;
//   return true;
// };

// MyCircularQueue.prototype.deQueue = function() {
//   if (this.isEmpty()) {
//     return false;
//   }
//   if (this.head === this.tail) {
//     this.head = -1;
//     this.tail = -1;
//     return true;
//   }
//   this.head = (this.head + 1) % this.queue.length;
//   return true;
// };

// MyCircularQueue.prototype.Front = function() {
//   return this.isEmpty() ? -1 : this.queue[this.head];
// };

// MyCircularQueue.prototype.Rear = function() {
//   return this.isEmpty() ? -1 : this.queue[this.tail];
// };

// MyCircularQueue.prototype.isEmpty = function() {
//   return this.head === -1;
// };

// MyCircularQueue.prototype.isFull = function() {
//   return (this.tail + 1) % this.queue.length === this.head;
// };


/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// Class syntax
// class MyCircularQueue {
//   constructor(k) {
//     this.queue = new Array(k);
//     this.headIndex = 0;
//     this.count = 0;
//     this.capacity = k;
//   }

//   enQueue(value) {
//     if (this.isFull()) {
//       return false;
//     }
//     const tailIndex = (this.headIndex + this.count) % this.capacity;
//     this.queue[tailIndex] = value;
//     this.count++;
//     return true;
//   }

//   deQueue() {
//     if (this.isEmpty()) {
//       return false;
//     }
//     this.headIndex = (this.headIndex + 1) % this.capacity;
//     this.count--;
//     return true;
//   }

//   Front() {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     return this.queue[this.headIndex];
//   }

//   Rear() {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
//     return this.queue[tailIndex];
//   }

//   isEmpty() {
//     return this.count === 0;
//   }

//   isFull() {
//     return this.count === this.capacity;
//   }
// }

// Factories Functions
function MyCircularQueue(k) {
  let front = 0;
  let rear = 0;
  let len = 0;
  const arr = new Array(k).fill(null);

  function enQueue(value) {
    if (len === k) {
      return false;
    }
    arr[rear] = value;
    rear = (rear + 1) % k;
    len++;
    return true;
  }

  function deQueue() {
    if (len === 0) {
      return false;
    }
    arr[front] = null;
    front = (front + 1) % k;
    len--;
    return true;
  }

  function Front() {
    if (len === 0) {
      return -1;
    }
    return arr[front];
  }

  function Rear() {
    if (len === 0) {
      return -1;
    }
    return arr[(rear - 1 + k) % k];
  }

  function isEmpty() {
    return len === 0;
  }

  function isFull() {
    return len === k;
  }
    return {
    enQueue,
    deQueue,
    Front,
    Rear,
    isEmpty,
    isFull,
  };
}