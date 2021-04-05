// interface extension

enum Gender {
  Male,
  Female,
  Other
}

interface AccountSystem {
  email: string,
  password: string,
  subscribed: boolean
}

interface AccountPersonalInfo {
  nickname?: string,
  birth?: Date,
  gender?: Gender
}

interface UserAccount extends AccountSystem, AccountPersonalInfo { }

//////////////// test //////////////////////

let accountTony: UserAccount = {
  email: 'waiting33118@gmail.com',
  password: '123456789',
  subscribed: true,
  nickname: 'Tony',
  gender: Gender.Male
}

let accountBenny: UserAccount = {        //  miss subscribed , error
  email: 'benny@gmail.com',
  password: 'wedfgsgsdgegseg',
  nickname: 'Benny',
  birth: new Date(1999, 6, 23)
}

let accountMary: UserAccount = {
  email: 'mary@gmail.com',
  password: 'segszoidgj',
  subscribed: true,
  hasPet: true            // not exist in type UserAccount, error
}



/////////////////////// 名稱相同之屬性，各自對應之型別不能互相衝突 /////////////////////////////

interface I1 { a: string, b: number }
interface I2 { b: number, c: boolean }
interface I3 { a: string, c: string }

interface I12 extends I1, I2 { }

interface I23 extends I2, I3 { }  // error , c in I2, I3 not identical

interface I13 extends I1, I3 { }

interface I123 extends I1, I2, I3 { }  // error




