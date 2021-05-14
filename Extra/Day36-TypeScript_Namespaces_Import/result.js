"use strict";
var Circle;
(function (Circle) {
    Circle.PI = 3.14;
    function area(radius) {
        return Circle.PI * (Math.pow(radius, 2));
    }
    Circle.area = area;
    function circumference(radius) {
        return 2 * Circle.PI * radius;
    }
    Circle.circumference = circumference;
})(Circle || (Circle = {}));
var Rectangle;
(function (Rectangle) {
    function area(width, height) {
        return height * width;
    }
    Rectangle.area = area;
    function circumference(width, height) {
        return 2 * (width + height);
    }
    Rectangle.circumference = circumference;
})(Rectangle || (Rectangle = {}));
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function area(radius) {
            return Circle.PI * (Math.pow(radius, 2));
        }
        Circle.area = area;
        function circumference(radius) {
            return 2 * Circle.PI * radius;
        }
        Circle.circumference = circumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function area(width, height) {
            return height * width;
        }
        Rectangle.area = area;
        function circumference(width, height) {
            return 2 * (width + height);
        }
        Rectangle.circumference = circumference;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
// console.log(Circle.PI)
// console.log(Circle.area(4))
// console.log(Circle.circumference(4))
// console.log(Rectangle.area(10, 20))
// console.log(Rectangle.circumference(50, 100))
// // namespace merging
// console.log(MyMath.Circle.PI)
// console.log(MyMath.Circle.area(5))
// console.log(MyMath.Rectangle.circumference(20, 30))
/// <reference path="./MyMath/Circle.ts" />
/// <reference path="./MyMath/Rectangle.ts" />
console.log(MyMath.Circle.PI);
console.log(MyMath.Circle.area(5));
console.log(MyMath.Rectangle.circumference(20, 30));
