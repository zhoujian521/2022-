function typeOf(val) {
    return Object.prototype.toString().call(val).slice(8, -1).toLowerCase()
}

function foo() {
    console.log(this.name) //this.name 
}

function bar() {
    var name = 'a' //私有变量
    foo()
}
var name = 'b'
bar()

//打印值  b

var b = 10;
(function b() {
    b = 20;
    console.log(b);
})();

function answer(arr, target = 9) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        const sKey = target - arr[i];
        if (map[sKey] === undefined) {
            map[arr[i]] = i;
        } else {
            return [map[sKey], i]
        }
    }
    return '123131231'
}

function Foo() {
    Foo.a = function() {
        console.log(1);
    };
    this.a = function() {
        console.log(2);
    };
}
Foo.prototype.a = function() {
    console.log(3);
};
Foo.a = function() {
    console.log(4);
};

Foo.a();
let obj = new Foo();
obj.a();
Foo.a();