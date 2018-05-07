function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  this.stack.push(value);
};

Stack.prototype.pop = function() {
  return this.stack.pop();
};

Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};

Stack.prototype.length = function() {
  return this.stack.length;
};

Stack.prototype.print = function() {
  var str = this.stack.join(' ');
  console.log(str);
  return str;
};

export default Stack;

