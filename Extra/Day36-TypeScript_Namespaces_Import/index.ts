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

console.log(MyMath.Circle.PI)
console.log(MyMath.Circle.area(5))
console.log(MyMath.Rectangle.circumference(20, 30))