type TUserAccount = {
  account: string,
  password: string,
  money: number
}

interface AccountSystem {
  // both must be private
  // users: TUserAccount[]
  // currentUser?: TUserAccount

  signIn(account: string, password: string): void

  signOut(): void
  fetchTotalAmount(): void
}

interface TransactionSystem {
  deposit(amount: number): void
  withdraw(amount: number): void
}

interface ICashMachine extends AccountSystem, TransactionSystem { }


class CashMachine implements ICashMachine {
  constructor(
    private users: TUserAccount[],
    private currentUser?: TUserAccount
  ) { }



  signIn(account: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i]
      if (user.account === account && user.password === password) {
        this.currentUser = user
        break
      }
    }
    if (!this.currentUser) {
      throw new Error('User Not Found')
    }
  }

  signOut() {
    this.currentUser = undefined
  }

  fetchTotalAmount() {
    console.log(`
      Your total amount: ${this.currentUser?.money}
    `)
  }

  deposit(amount: number) {
    if (this.currentUser) {
      this.currentUser.money += amount
      return
    }
    throw new Error("No user signed in")
  }

  withdraw(amount: number) {
    if (this.currentUser) {
      this.currentUser.money -= amount
      return
    }
    throw new Error("No user signed in")
  }
}

/////////////////////////////////////
function printAccountInfo(input?: TUserAccount) {
  if (input) {
    console.log(`
      Current User: ${input.account}
      Money: ${input.money}
    `)
    return
  }
  console.log('No User Found')
}

const users: TUserAccount[] = [
  { account: 'A', password: '123', money: 2000 },
  { account: 'B', password: '123', money: 3000 }
]

const machine = new CashMachine(users)
console.log('Initialize')
// printAccountInfo(machine.currentUser)

machine.signIn('A', '123')
console.log('sign in')
// printAccountInfo(machine.currentUser)

machine.deposit(300)
// printAccountInfo(machine.currentUser)

machine.withdraw(1000)
// printAccountInfo(machine.currentUser)

machine.fetchTotalAmount()
machine.signOut()
// printAccountInfo(machine.currentUser)

// console.log(machine.users)