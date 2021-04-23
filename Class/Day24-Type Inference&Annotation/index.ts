enum Color { White, Black, Brown, Grey, Rainbow }

class Horse {
  constructor(
    public name: string,
    public color: Color,
    public readonly type: string,
    private noise: string = 'qwfwfefsefsefsefse'
  ) { }

  public makeNoise() {
    console.log(this.noise)
  }

  public info() {
    console.log(this.infoText)
  }

  protected infoText(): string {
    return `It is ${this.name} the ${Color[this.color]} ${this.type}.`
  }
}

let horse1 = new Horse('Tony', Color.Black, 'Pony')

/*  error
horse1.color = 'red'
horse1.isNatural = true
horse1 = null
*/

let horse2: Horse = new Horse('ABC', Color.Brown, 'Dinosor')
let horse3 = <Horse>(new Horse('q', Color.Rainbow, 'asd'))
let horse4 = new Horse('asd', Color.White, 'dsfsf') as Horse



class Unicron extends Horse {
  constructor(name: string) {
    super(
      name,
      Color.Rainbow,
      'Unicorn',
      'eeeeeeeeeee'
    )
  }

  protected infoText(): string {
    return `It's a mystical unicorn Its name is ${this.name}`
  }

  public puke(): void {
    console.log('Puking rainbow vomit')
  }
}


const unicorn1 = new Unicron('AWA')
unicorn1.makeNoise()
unicorn1.info()
unicorn1.puke()


let anotherUnicorn: Horse = new Unicron('asd')


class Stallion extends Horse {
  constructor(name: string) {
    super(
      name,
      Color.Rainbow,
      'Stallion'
    )
  }
}

let shouldBeStallion: Stallion = new Horse('qwe', Color.Rainbow, 'dssd')


// let unicorn2: Unicron = new Horse('qwe', Color.Black, 'asd')


class C1 {
  constructor(public prop: string) { }

  public publicMethod(): string {
    return this.prop
  }
}

class C2 {
  constructor(public prop: string) { }

  public publicMethod(): string {
    return this.prop
  }
}

let comeObject: C1 = new C2('hello')



class D1 {
  constructor(
    public prop: string,
    private privateProp: number
  ) { }

  public publicMethod(): number {
    return this.privateMethod()
  }

  private privateMethod(): number {
    return this.privateProp
  }
}

class D2 {
  constructor(
    public prop: string,
    private privateProp: number
  ) { }

  public publicMethod(): number {
    return this.privateMethod()
  }

  private privateMethod(): number {
    return this.privateProp
  }
}

// let test: D1 = new D2('123', 23)



type TA = {
  hello: string
}
type TB = {
  hello: string
}

interface IA {
  hello: string
}
interface IB {
  hello: string
}

function logTypeA(obj: TA) {
  console.log(obj)
}

logTypeA(<TB>{ hello: 'World' })
logTypeA(<IA>{ hello: 'World' })
logTypeA(<IB>{ hello: 'World' })