function Node(val) {
  this.val = val;
  this.next = null;
}

var MyHashSet = function() {
  this.size = 1000;
  this.data = new Array(this.size);
};

MyHashSet.prototype.add = function(key) {
  const index = key % this.size;
  if (!this.data[index]) {
    this.data[index] = new Node(key);
  } else {
    let cur = this.data[index];
    while (cur) {
      if (cur.val === key) {
        return;
      }
      if (!cur.next) {
        cur.next = new Node(key);
        return;
      }
      cur = cur.next;
    }
  }
};

MyHashSet.prototype.remove = function(key) {
  const index = key % this.size;
  if (!this.data[index]) {
    return;
  }
  if (this.data[index].val === key) {
    this.data[index] = this.data[index].next;
    return;
  }
  let cur = this.data[index];
  while (cur.next) {
    if (cur.next.val === key) {
      cur.next = cur.next.next;
      return;
    }
    cur = cur.next;
  }
};

MyHashSet.prototype.contains = function(key) {
  const index = key % this.size;
  let cur = this.data[index];
  while (cur) {
    if (cur.val === key) {
      return true;
    }
    cur = cur.next;
  }
  return false;
};

// /** 
//  * Your MyHashSet object will be instantiated and called as such:
//  * var obj = new MyHashSet()
//  * obj.add(key)
//  * obj.remove(key)
//  * var param_3 = obj.contains(key)
//  */

//class
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class MyHashSet {
//   constructor() {
//     this.size = 1000;
//     this.data = new Array(this.size);
//   }

//   add(key) {
//     const index = key % this.size;
//     if (!this.data[index]) {
//       this.data[index] = new Node(key);
//     } else {
//       let cur = this.data[index];
//       while (cur) {
//         if (cur.val === key) {
//           return;
//         }
//         if (!cur.next) {
//           cur.next = new Node(key);
//           return;
//         }
//         cur = cur.next;
//       }
//     }
//   }

//   remove(key) {
//     const index = key % this.size;
//     if (!this.data[index]) {
//       return;
//     }
//     if (this.data[index].val === key) {
//       this.data[index] = this.data[index].next;
//       return;
//     }
//     let cur = this.data[index];
//     while (cur.next) {
//       if (cur.next.val === key) {
//         cur.next = cur.next.next;
//         return;
//       }
//       cur = cur.next;
//     }
//   }

//   contains(key) {
//     const index = key % this.size;
//     let cur = this.data[index];
//     while (cur) {
//       if (cur.val === key) {
//         return true;
//       }
//       cur = cur.next;
//     }
//     return false;
//   }
// }