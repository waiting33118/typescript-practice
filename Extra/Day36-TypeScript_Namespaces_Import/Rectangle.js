"use strict";
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
