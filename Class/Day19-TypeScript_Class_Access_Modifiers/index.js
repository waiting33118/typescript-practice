"use strict";
var CashMachine = /** @class */ (function () {
    function CashMachine() {
        this.users = [
            { account: 'A', password: '123', money: 2000 },
            { account: 'B', password: '123', money: 3000 }
        ];
    }
    CashMachine.prototype.signIn = function (account, password) {
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.account === account && user.password === password) {
                this.currentUser = user;
                break;
            }
        }
        if (!this.currentUser) {
            throw new Error('User Not Found');
        }
    };
    CashMachine.prototype.signOut = function () {
        this.currentUser = undefined;
    };
    CashMachine.prototype.deposit = function (amount) {
        if (this.currentUser) {
            this.currentUser.money += amount;
            return;
        }
        throw new Error("No user signed in");
    };
    CashMachine.prototype.withdraw = function (amount) {
        if (this.currentUser) {
            this.currentUser.money -= amount;
            return;
        }
        throw new Error("No user signed in");
    };
    return CashMachine;
}());
/////////////////////////////////////
function printAccountInfo(input) {
    if (input) {
        console.log("\n      Current User: " + input.account + "\n      Money: " + input.money + "\n    ");
        return;
    }
    console.log('No User Found');
}
var machine = new CashMachine();
console.log('Initialize');
printAccountInfo(machine.currentUser);
machine.signIn('A', '123');
console.log('sign in');
printAccountInfo(machine.currentUser);
machine.deposit(300);
printAccountInfo(machine.currentUser);
machine.withdraw(1000);
printAccountInfo(machine.currentUser);
machine.signOut();
printAccountInfo(machine.currentUser);
console.log(machine.users);
