// optional properties

interface OptionInterface {
  message?: string
}

type OptionType = {
  message?: string
}

// function overload

interface InterfaceOverload {
  createElement(name: 'a'): HTMLAnchorElement
  createElement(name: 'p'): HTMLParagraphElement
}

type TypeOverload = {
  createElement(name: 'a'): HTMLAnchorElement
  createElement(name: 'p'): HTMLParagraphElement
}

// indexable types

interface InterfaceStringDict {
  [prop: string]: string
}

type TypeStringDict = {
  [prop: string]: string
}


// readonly

interface InterfaceReadonly {
  readonly message: string
}

type TypeReadonly = {
  readonly message: string
}

// intersection and union

type Tunion = InterfaceStringDict | TypeStringDict
type Tintersection = InterfaceStringDict & TypeStringDict

const test: Tunion = {
  hello: 'world'
}

const test2: Tintersection = {
  hello: 'world'
}

// interface extends from type alias

type T = {
  prop: string
}

interface I extends T {
  prop2: number
}

const testExtend: I = {
  prop: '1123',
  prop2: 1234
}

type TPrimitive = number

// interface IError extends TPrimitive { }  // error, can't extend primitive type

enum Gender {
  Male,
  Female,
  Other
}

type UserGender = Gender

interface IUserGender {
  gender: Gender
}

type Message = 'error' | 'success' | 'info'

enum MessageOption {
  error,
  success,
  info
}

function printMessage(message: Message) {
  console.log(message)
}

function printMessage2(message: MessageOption) {
  console.log(message)
}

printMessage('error')

printMessage2(MessageOption.error)