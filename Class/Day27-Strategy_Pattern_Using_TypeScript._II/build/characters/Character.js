"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.attackRef = this.weaponRef.attackStrategy;
    }
    Character.prototype.introduce = function () {
        console.log("\n      Hi,I'm " + this.name + " the " + this.role + "!\n    ");
    };
    Character.prototype.attack = function (target) {
        // 第一個參數是指定攻擊者，是自己
        this.attackRef.attack(this, target);
    };
    Character.prototype.switchAttackStrategy = function (type) {
        this.attackRef = type;
    };
    Character.prototype.equip = function (weapon) {
        var roles = weapon.availiableRoles;
        if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
            console.log(this.name + " has equipped " + weapon.name);
            this.weaponRef = weapon;
            this.attackRef = this.weaponRef.attackStrategy;
        }
        else {
            throw new Error(this.role + " cannot equip " + weapon.name);
        }
    };
    return Character;
}());
exports.default = Character;
