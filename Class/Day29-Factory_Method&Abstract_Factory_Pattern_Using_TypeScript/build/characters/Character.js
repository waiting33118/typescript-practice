"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Armour_1 = __importDefault(require("../armours/Armour"));
var Weapon_1 = __importDefault(require("../weapons/Weapon"));
var Character = /** @class */ (function () {
    function Character(name, role, weaponRef, armourRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.armourRef = armourRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n      Hi,I'm " + this.name + " the " + this.role + "!\n    ");
    };
    Character.prototype.attack = function (target) {
        // 第一個參數是指定攻擊者，是自己
        this.weaponRef.attack(this, target);
    };
    Character.prototype.equip = function (equipment) {
        var roles = equipment.availableRoles;
        if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
            if (equipment instanceof Weapon_1.default) {
                this.weaponRef = equipment;
            }
            else if (equipment instanceof Armour_1.default) {
                this.armourRef = equipment;
            }
        }
        else {
            throw new Error(this.role + " cannot equip " + equipment.name);
        }
        console.log(this.name + " has equipped a " + equipment.type + " - " + equipment.name);
    };
    return Character;
}());
exports.default = Character;
