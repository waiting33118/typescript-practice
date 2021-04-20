class CircleGeometry {
  private PI: number = 3.14
  public area: number

  constructor(public radius: number) {
    this.area = this.PI * (this.radius ** 2)
  }

  public circumference(): number {
    return 2 * this.PI * this.radius
  }
}

const myCircle = new CircleGeometry(2)

// console.log(myCircle.area)


class CircleGeometryV2 {
  public readonly PI: number = 3.14
  static readonly staticPI: number = 3.14
  constructor(public radius: number) { }

  get area() {
    return this.PI * (this.radius ** 2)
  }

  set area(value: number) {
    this.radius = (value / this.PI) ** 0.5
  }

  get circumference(): number {
    return 2 * this.PI * this.radius
  }
}

const myCircle2 = new CircleGeometryV2(2)

// console.log(myCircle2.area)

// myCircle2.area = 123   error: read-only

// myCircle2.radius = 3

// console.log(myCircle2.area)
// console.log(myCircle2.circumference)

const myCircle3 = new CircleGeometryV2(2)

console.log(myCircle3.PI)

// myCircle3.PI = 123   // error readonly!!

console.log(myCircle3.radius)

console.log(myCircle3.area)

let areaOfCircle = myCircle3.area

myCircle3.area = 3.14 * (5 ** 2)

console.log(myCircle3.radius)


