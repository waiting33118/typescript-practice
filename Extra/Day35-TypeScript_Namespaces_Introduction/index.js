"use strict";
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function AreaOfCircle(radius) {
        return (Math.pow(radius, 2)) * MyMath.PI;
    }
    MyMath.AreaOfCircle = AreaOfCircle;
    function AreaOfRectangle(width, height) {
        return height * width;
    }
    MyMath.AreaOfRectangle = AreaOfRectangle;
    function CircumferenceOfCircle(radius) {
        return 2 * MyMath.PI * radius;
    }
    MyMath.CircumferenceOfCircle = CircumferenceOfCircle;
    function CircumferenceOfRectangle(width, height) {
        return (width + height) * 2;
    }
    MyMath.CircumferenceOfRectangle = CircumferenceOfRectangle;
})(MyMath || (MyMath = {}));
MyMath.PI;
MyMath.AreaOfCircle(5);
var MyMath2;
(function (MyMath2) {
    var Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function area(radius) {
            return (Math.pow(radius, 2)) * Circle.PI;
        }
        Circle.area = area;
        function circumference(radius) {
            return 2 * Circle.PI * radius;
        }
        Circle.circumference = circumference;
    })(Circle = MyMath2.Circle || (MyMath2.Circle = {}));
    var Rectangle;
    (function (Rectangle) {
        function area(width, height) {
            return width * height;
        }
        Rectangle.area = area;
        function circumference(width, height) {
            return (width + height) * 2;
        }
        Rectangle.circumference = circumference;
    })(Rectangle = MyMath2.Rectangle || (MyMath2.Rectangle = {}));
})(MyMath2 || (MyMath2 = {}));
console.log(MyMath2.Circle.PI);
console.log(MyMath2.Circle.area(4));
console.log(MyMath2.Rectangle.area(3, 3));
var Misc;
(function (Misc) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(type, wheels, color) {
            this.type = type;
            this.wheels = wheels;
            this.color = color;
        }
        Vehicle.prototype.getInfo = function () {
            console.log("The " + this.color + " " + this.type + " has " + this.wheels + " wheels");
        };
        return Vehicle;
    }());
    Misc.Vehicle = Vehicle;
})(Misc || (Misc = {}));
var dict = {
    hello: 'World'
};
var tony = {
    name: 'Tony',
    age: 23,
    hasPet: true
};
var car = new Misc.Vehicle('car', 4, 'white');
car.getInfo();
// namespace merge
var MyMath3;
(function (MyMath3) {
    var Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function area(radius) {
            return (Math.pow(radius, 2)) * Circle.PI;
        }
        Circle.area = area;
        function circumference(radius) {
            return 2 * Circle.PI * radius;
        }
        Circle.circumference = circumference;
    })(Circle = MyMath3.Circle || (MyMath3.Circle = {}));
})(MyMath3 || (MyMath3 = {}));
(function (MyMath3) {
    var Rectangle;
    (function (Rectangle) {
        function area(width, height) {
            return width * height;
        }
        Rectangle.area = area;
        function circumference(width, height) {
            return (width + height) * 2;
        }
        Rectangle.circumference = circumference;
    })(Rectangle = MyMath3.Rectangle || (MyMath3.Rectangle = {}));
})(MyMath3 || (MyMath3 = {}));
console.log(MyMath3.Circle);
console.log(MyMath3.Rectangle);
// cross using
var Circle;
(function (Circle) {
    Circle.PI = 3.14;
    function area(radius) {
        return (Math.pow(radius, 2)) * Circle.PI;
    }
    Circle.area = area;
    function circumference(radius) {
        return 2 * Circle.PI * radius;
    }
    Circle.circumference = circumference;
})(Circle || (Circle = {}));
(function (Circle) {
    // export function area(diameter: number) {
    //   return ((diameter / 2) ** 2) * PI
    // }
    function degreeToRadiun(degree) {
        return (degree / 180) * Circle.PI;
    }
    Circle.degreeToRadiun = degreeToRadiun;
})(Circle || (Circle = {}));
console.log(Circle.degreeToRadiun(180));
