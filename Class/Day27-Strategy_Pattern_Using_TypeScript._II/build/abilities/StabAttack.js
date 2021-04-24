"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StabAttack = /** @class */ (function () {
    function StabAttack() {
    }
    StabAttack.prototype.attack = function (self, target) {
        console.log(self.name + " stabs through " + target.name + " with his sword!");
    };
    return StabAttack;
}());
exports.default = StabAttack;
