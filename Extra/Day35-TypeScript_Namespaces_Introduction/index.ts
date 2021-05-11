namespace MyMath {
  export const PI = 3.14

  export function AreaOfCircle(radius: number) {
    return (radius ** 2) * PI
  }

  export function AreaOfRectangle(width: number, height: number) {
    return height * width
  }

  export function CircumferenceOfCircle(radius: number) {
    return 2 * PI * radius
  }

  export function CircumferenceOfRectangle(width: number, height: number) {
    return (width + height) * 2
  }

}
MyMath.PI
MyMath.AreaOfCircle(5)


namespace MyMath2 {
  export namespace Circle {
    export const PI = 3.14

    export function area(radius: number) {
      return (radius ** 2) * PI
    }

    export function circumference(radius: number) {
      return 2 * PI * radius
    }
  }

  export namespace Rectangle {
    export function area(width: number, height: number) {
      return width * height
    }

    export function circumference(width: number, height: number) {
      return (width + height) * 2
    }
  }
}

console.log(MyMath2.Circle.PI)
console.log(MyMath2.Circle.area(4))
console.log(MyMath2.Rectangle.area(3, 3))


namespace Misc {
  export type Dictionary = { [key: string]: string }

  export interface UserInfo {
    name: string,
    age: number,
    hasPet: boolean
  }

  export class Vehicle {
    constructor(
      public type: string,
      public wheels: number,
      public color: string
    ) { }

    public getInfo() {
      console.log(`The ${this.color} ${this.type} has ${this.wheels} wheels`)
    }
  }
}

const dict: Misc.Dictionary = {
  hello: 'World'
}

const tony: Misc.UserInfo = {
  name: 'Tony',
  age: 23,
  hasPet: true
}

const car = new Misc.Vehicle('car', 4, 'white')

car.getInfo()


// namespace merge

namespace MyMath3 {
  export namespace Circle {
    export const PI = 3.14

    export function area(radius: number) {
      return (radius ** 2) * PI
    }

    export function circumference(radius: number) {
      return 2 * PI * radius
    }
  }
}

namespace MyMath3 {
  export namespace Rectangle {
    export function area(width: number, height: number) {
      return width * height
    }

    export function circumference(width: number, height: number) {
      return (width + height) * 2
    }
  }
}

console.log(MyMath3.Circle)

console.log(MyMath3.Rectangle)


// cross using

namespace Circle {
  export const PI = 3.14

  export function area(radius: number) {
    return (radius ** 2) * PI
  }

  export function circumference(radius: number) {
    return 2 * PI * radius
  }
}

namespace Circle {
  // export function area(diameter: number) {
  //   return ((diameter / 2) ** 2) * PI
  // }

  export function degreeToRadiun(degree: number) {
    return (degree / 180) * PI
  }
}

console.log(Circle.degreeToRadiun(180))

namespace DomNamespace {
  export interface MyDocument {
    createElement(name: 'p'): HTMLParagraphElement
    createElement(name: 'div'): HTMLDivElement
  }
}

namespace DomNamespace {
  export interface MyDocument {
    createElement(name: 'a'): HTMLAnchorElement
    createElement(name: 'span'): HTMLSpanElement
  }
}
