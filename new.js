/**
 * @example
 * function Person(name, age) {
 *   this.name = name;
 *   this.age = age
 * }
 * Person.prototype.say = function() {
 *   console.log('hello' + this.name + this.age)
 * }
 * 
 * var person = newCreate(Person, 'lihaoze', 18) 
 * 
 * person.say()
 */

var newCreate = function() {
  // 创建一个对象
  var obj = new Object();

  // 第一个参数是构造函数
  var Constructor = [].shift.call(arguments);

  // 原型指向构造函数prototype，实现原型继承
  obj.__proto__ = Constructor.prototype;

  // 执行构造函数，this执行obj
  var result = Constructor.apply(obj, arguments);

  // 构造函数返回是对象，优先使用返回的对象，否则是obj
  return result instanceof Object ? result : obj;
}


