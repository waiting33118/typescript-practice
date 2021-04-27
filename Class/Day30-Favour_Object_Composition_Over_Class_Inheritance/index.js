"use strict";
// class MyWindow {
//   public readonly shape = 'Rectangular'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.circumference = function () {
        return 2 * (this.width * this.height);
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return (Math.pow(this.radius, 2)) * Circle.PI;
    };
    Circle.prototype.circumference = function () {
        return 2 * Circle.PI * this.radius;
    };
    Circle.PI = 3.14;
    return Circle;
}());
var RectangularWindow = /** @class */ (function (_super) {
    __extends(RectangularWindow, _super);
    function RectangularWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shape = 'Rectangle';
        return _this;
    }
    return RectangularWindow;
}(Rectangle));
var CircleWindow = /** @class */ (function (_super) {
    __extends(CircleWindow, _super);
    function CircleWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shape = 'Circle';
        return _this;
    }
    return CircleWindow;
}(Circle));
var MyWindow = /** @class */ (function () {
    function MyWindow(geometry) {
        this.geometry = geometry;
    }
    MyWindow.prototype.area = function () {
        return this.geometry.area();
    };
    MyWindow.prototype.circumference = function () {
        return this.geometry.circumference();
    };
    return MyWindow;
}());
var rectWindow = new MyWindow(new Rectangle(50, 100));
console.log(rectWindow.area());
console.log(rectWindow.circumference());
var circleWindow = new MyWindow(new Circle(10));
console.log(circleWindow.area());
console.log(circleWindow.circumference());
