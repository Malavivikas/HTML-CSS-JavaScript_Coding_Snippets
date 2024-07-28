class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a node at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert a node at a specific position
  insertAtPosition(data, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }
    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (current === null && count < position) {
      console.log("Position out of bounds");
      return;
    }

    newNode.next = current;
    prev.next = newNode;
  }

  // Delete a node from a given position
  deleteFromPosition(position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Position out of bounds");
      return;
    }

    prev.next = current.next;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtBeginning(50);
list.insertAtEnd(3);
list.insertAtPosition(4, 3); // Insert 4 at position 3
list.printList(); // 1 4 2 3

list.deleteFromPosition(2); // Delete node at position 2
list.printList(); // 1 4 3
