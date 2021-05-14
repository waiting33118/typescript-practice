namespace MyMath {
  export namespace Rectangle {
    export function area(width: number, height: number) {
      return height * width
    }

    export function circumference(width: number, height: number) {
      return 2 * (width + height)
    }
  }
}
