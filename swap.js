var a = 7;
var b = 5;
var n = a;
a= b;
b = n;
console.log('after swap: a =', a, 'b =', b);

// OR

var x = 7;
var y = 5;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);

// OR 

var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("after swap: p =", p, "q =", q);

