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
