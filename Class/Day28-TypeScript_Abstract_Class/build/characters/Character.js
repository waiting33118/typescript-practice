"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n      Hi,I'm " + this.name + " the " + this.role + "!\n    ");
    };
    Character.prototype.attack = function (target) {
        // 第一個參數是指定攻擊者，是自己
        this.weaponRef.attack(this, target);
    };
    Character.prototype.equip = function (weapon) {
        var roles = weapon.availableRoles;
        if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
            this.weaponRef = weapon;
        }
        else {
            throw new Error(this.role + " cannot equip " + weapon.name);
        }
    };
    return Character;
}());
exports.default = Character;
