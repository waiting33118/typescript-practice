/* 明文型別特別案例  */

// 字串值也可以當作明文行別的一種形式

type WeekDayString = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

function selectWeekDay(weekDay: WeekDayString) {
  console.log(weekDay)
}

selectWeekDay('Fri')


/* 宣告 Interface */

enum Gender { Male, Female, Other }

// 物件格式
interface UserInfo {
  // 原始型別
  id: number
  name: string

  // 廣義物件
  birth: Date
  interests: string[]

  // Enum
  gender: Gender

  address: {
    country: string
    city: string
    postalCode: string
  }

  logInfo(message: string): void
}

// 單純函式
interface UpdateRecord {
  (id: number, newRecord: UserInfo): void
}


interface Person {
  name: string
  age: number
  hasPet: boolean
}

const tony: Person = {
  name: 'Tony',
  age: 23,
  hasPet: true
}

const tony2: Person = {
  name: 'Tony',
  age: 23,
  hasPet: true
  job: 'Devops'
}

const tony3: Person = {
  name: 'Tony',
  age: 23,
  hasPet: 'Ori'
}

