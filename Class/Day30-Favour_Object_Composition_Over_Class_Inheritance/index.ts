// class MyWindow {
//   public readonly shape = 'Rectangular'

//   constructor(
//     public width: number,
//     public height: number
//   ) { }

//   public area() {
//     return this.width * this.height
//   }

//   public circumference() {
//     return 2 * (this.width * this.height)
//   }
// }

// let myWindow = new MyWindow(10, 20)

// console.log(myWindow.area())
// console.log(myWindow.circumference())



interface Geometry {
  area(): number
  circumference(): number
}

class Rectangle implements Geometry {
  constructor(public width: number, public height: number) { }

  public area() {
    return this.width * this.height
  }

  public circumference() {
    return 2 * (this.width * this.height)
  }
}

class Circle implements Geometry {
  public static PI = 3.14
  constructor(public radius: number) { }

  public area() {
    return (this.radius ** 2) * Circle.PI
  }

  public circumference() {
    return 2 * Circle.PI * this.radius
  }
}

class RectangularWindow extends Rectangle {
  public readonly shape = 'Rectangle'
}

class CircleWindow extends Circle {
  public readonly shape = 'Circle'
}

class MyWindow {
  constructor(public geometry: Geometry) { }

  public area() {
    return this.geometry.area()
  }

  public circumference() {
    return this.geometry.circumference()
  }
}


let rectWindow = new MyWindow(new Rectangle(50, 100))

console.log(rectWindow.area())
console.log(rectWindow.circumference())


let circleWindow = new MyWindow(new Circle(10))

console.log(circleWindow.area())
console.log(circleWindow.circumference())