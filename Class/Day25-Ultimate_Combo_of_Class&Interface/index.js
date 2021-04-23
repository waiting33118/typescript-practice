"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Role;
(function (Role) {
    Role["Swordsman"] = "Swordsman";
    Role["Warlock"] = "Warlock";
    Role["Highwayman"] = "Highwayman";
    Role["BountyHunter"] = "BountyHunter";
    Role["Monster"] = "Monster";
})(Role || (Role = {}));
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var Character = /** @class */ (function () {
    function Character(name, role, health, mana, strength, defense) {
        if (health === void 0) { health = 50; }
        if (mana === void 0) { mana = 10; }
        if (strength === void 0) { strength = 10; }
        if (defense === void 0) { defense = 5; }
        this.name = name;
        this.role = role;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.defense = defense;
    }
    Character.prototype.attack = function (target) {
        var verb;
        switch (this.role) {
            case Role.Swordsman:
                verb = 'attacking';
                break;
            case Role.Warlock:
                verb = 'cursing';
                break;
            case Role.Highwayman:
                verb = 'ambushing';
                break;
            case Role.BountyHunter:
                verb = 'threatening';
                break;
            default: throw new Error(this.role + " didn't exist");
        }
        console.log(this.name + " is " + verb + " " + target.name);
    };
    return Character;
}());
var character1 = new Character('Tony', Role.BountyHunter);
var character2 = new Character('Benny', Role.Highwayman);
character1.attack(character2);
character2.attack(character1);
var character = new Character('Test1', Role.Swordsman);
var testCharacter = new Character('Test2', Role.Warlock);
character.name;
character.health;
testCharacter.name;
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.role = Role.Monster;
    }
    Monster.prototype.attack = function (target) {
        console.log(this.name + " is attacking the " + target.role + " - " + target.name);
    };
    return Monster;
}());
var monster1 = new Monster('aaa');
monster1.attack(character1);
var BountyHunter = /** @class */ (function (_super) {
    __extends(BountyHunter, _super);
    function BountyHunter(name) {
        var _this = _super.call(this, name, Role.BountyHunter) || this;
        _this.name = name;
        _this.hostages = [];
        return _this;
    }
    BountyHunter.prototype.capture = function (target, successRate) {
        var randomNumber = Math.random();
        var message;
        var targetTitle = target.name + " the " + target.role;
        if (randomNumber > (1 - successRate)) {
            this.hostages = __spreadArray(__spreadArray([], this.hostages), [target]);
            message = this.name + " has captured " + targetTitle;
        }
        else {
            message = this.name + " failed to capture " + targetTitle;
        }
        console.log(message);
    };
    BountyHunter.prototype.sellHostages = function () {
        var totalPrice = this.hostages.length * 1000;
        var hostagesInfo = this.hostages
            .map(function (hostage) { return hostage.name + " the " + hostage.role; }).join('\n');
        console.log("\n      " + this.name + " sells all the hostages, including:\n      " + hostagesInfo + "\n\n      Recieve Gold " + totalPrice + "\n    ");
        this.hostages = [];
    };
    return BountyHunter;
}(Character));
var hunter1 = new BountyHunter('qqq');
var wantedCharacter = new Character('C', Role.Highwayman);
var wantedMonster = new Monster('m');
var desperdo = new Character('www', Role.Highwayman);
hunter1.capture(wantedCharacter, 1);
hunter1.capture(wantedMonster, 0.5);
hunter1.capture(desperdo, 0.01);
hunter1.sellHostages();
