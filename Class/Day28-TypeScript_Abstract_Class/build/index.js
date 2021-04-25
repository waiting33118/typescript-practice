"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StabAttack_1 = __importDefault(require("./abilities/StabAttack"));
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var BasicSword_1 = __importDefault(require("./weapons/BasicSword"));
var swordUsingStab = new BasicSword_1.default();
swordUsingStab.switchAttackStrategy(new StabAttack_1.default());
var swordsman = new Swordsman_1.default('Tony');
var warlock = new Warlock_1.default('Toby');
swordsman.attack(warlock);
swordsman.equip(swordUsingStab);
swordsman.attack(warlock);
