function Node(value){
  this.value = value || null;
  this.next = null;
  this.previous = function(){
    return null;
  }
};

Node.prototype.setPrevious = function(node){
  this.previous = function(){
    return node;
  }
  return this;
};

// like raise/rescue in Ruby
try {
  module.exports = Node;
} catch(e){
  
}