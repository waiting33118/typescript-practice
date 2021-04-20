"use strict";
class CircleGeometry {
    constructor(radius) {
        this.radius = radius;
        this.PI = 3.14;
        this.area = this.PI * (this.radius ** 2);
    }
    circumference() {
        return 2 * this.PI * this.radius;
    }
}
const myCircle = new CircleGeometry(2);
console.log(myCircle.area);
class CircleGeometryV2 {
    constructor(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    get area() {
        return this.PI * (this.radius ** 2);
    }
    set area(value) {
        this.radius = (value / this.PI) ** 0.5;
    }
    get circumference() {
        return 2 * this.PI * this.radius;
    }
}
const myCircle2 = new CircleGeometryV2(2);
// console.log(myCircle2.area)
// myCircle2.area = 123   error: read-only
// myCircle2.radius = 3
// console.log(myCircle2.area)
// console.log(myCircle2.circumference)
const myCircle3 = new CircleGeometryV2(2);
console.log(myCircle3.radius);
console.log(myCircle3.area);
myCircle3.area = 3.14 * (5 ** 2);
console.log(myCircle3.radius);
