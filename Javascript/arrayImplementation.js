class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //get a item from array
  get(index) {
    return this.data[index];
  }
  //push an item to array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  //pop an item from array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //delete particular item and shift further items left
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArray = new MyArray();
newArray.push("a");
newArray.push("b");
newArray.delete(1);
newArray.push("c");
newArray.push("d");
newArray.push("e");
newArray.pop();
console.log(newArray);
