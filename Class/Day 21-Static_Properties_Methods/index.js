"use strict";
var CircleGeometry = /** @class */ (function () {
    function CircleGeometry(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    CircleGeometry.prototype.area = function () {
        return this.PI * (Math.pow(this.radius, 2));
    };
    CircleGeometry.prototype.circumference = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleGeometry;
}());
var myCircle = new CircleGeometry(2);
console.log(myCircle.area());
console.log(myCircle.circumference());
var StaticCircleGeometry = /** @class */ (function () {
    function StaticCircleGeometry() {
    }
    StaticCircleGeometry.area = function (radius) {
        return StaticCircleGeometry.PI * (Math.pow(radius, 2));
    };
    StaticCircleGeometry.circumference = function (radius) {
        return 2 * StaticCircleGeometry.PI * radius;
    };
    StaticCircleGeometry.PI = 3.14;
    return StaticCircleGeometry;
}());
var circleOfArea = StaticCircleGeometry.area(2);
var circleOfCircumference = StaticCircleGeometry.circumference(2);
console.log("Static " + circleOfArea + " " + circleOfCircumference);
