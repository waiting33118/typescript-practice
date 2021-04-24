"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var swordsman = new Swordsman_1.default('Tony');
var warlock = new Warlock_1.default('Toby');
swordsman.attack(warlock);
warlock.attack(swordsman);
