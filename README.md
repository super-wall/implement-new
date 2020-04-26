# 模拟实现new操作符

## 面试题：当代码 new Foo(...) 执行时，会发生什么：

> 1. 一个继承自 Foo.prototype 的新对象被创建。
> 2. 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
> 3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。


## 模拟实现

```javascript
/**
 * var o = newCreate(Foo, xxx)
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

```
