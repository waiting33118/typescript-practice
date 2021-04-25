"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var WeaponFactory_1 = __importDefault(require("./weapons/WeaponFactory"));
var Weapons_1 = __importDefault(require("./weapons/Weapons"));
var swordsman = new Swordsman_1.default('Tony');
var warlock = new Warlock_1.default('Toby');
var weaponFactory = new WeaponFactory_1.default();
swordsman.attack(warlock);
var dagger = weaponFactory.createWeapon(Weapons_1.default.Dagger);
swordsman.equip(dagger);
swordsman.attack(warlock);
