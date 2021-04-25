"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BasicSword_1 = __importDefault(require("./BasicSword"));
var BasicWand_1 = __importDefault(require("./BasicWand"));
var Dagger_1 = __importDefault(require("./Dagger"));
var Weapons_1 = __importDefault(require("./Weapons"));
var WeaponFactory = /** @class */ (function () {
    function WeaponFactory() {
    }
    WeaponFactory.prototype.createWeapon = function (type) {
        switch (type) {
            case Weapons_1.default.BasicSword:
                return new BasicSword_1.default();
                break;
            case Weapons_1.default.BasicWand:
                return new BasicWand_1.default();
                break;
            case Weapons_1.default.Dagger:
                return new Dagger_1.default();
                break;
            default:
                throw new Error(Weapons_1.default[type] + " isn't registerd!");
        }
    };
    return WeaponFactory;
}());
exports.default = WeaponFactory;
