var Node = require("./node.js");

function List(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

List.prototype.push = function(value){
  if(this.head === null){
    this.head = new Node(value);
    this.tail = this.head
  } else {
    var oldTail = this.tail;
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.tail.setPrevious(oldTail);
  }
  this.length += 1;
  return this;
};

List.prototype.pop = function(){
  if(this.head === null){
    return null;
  } else if(this.tail === this.head) {
        this.head = null;
        this.tail = null;
  } else {
        this.tail = this.tail.previous();
        this.tail.next = null;
  }
};

List.prototype.shift = function(){
  if(this.head === null){
    return null;
  }else {
    this.head = this.head.next;
    this.head.setPrevious(null);
  }
};

List.prototype.insert = function(index, value){
  if (this.length === index) {
    this.push(value);
  } else if (index === 0) {
    this.unshift(value);
  } else {
    var i = 0;
    var node = this.head
    while (i < index) {
      node = node.next
      i++;
    }
  var prevNode = node.previous();
  var nextNode = prevNode.next;
  var thisNode = new Node(value);
  prevNode.next = thisNode;
  nextNode.setPrevious(thisNode);
  thisNode.next = nextNode;
  thisNode.setPrevious(prevNode);
  }
};

List.prototype.unshift = function(value){
  if(this != null){
    var Node = new Node(value);
    Node = this.shift(newNode); 
  }
};

List.prototype.getIndex = function(index){

};  

List.prototype.setIndex = function(index, value){

};


try {
  module.exports = List;
} catch(e){

}
