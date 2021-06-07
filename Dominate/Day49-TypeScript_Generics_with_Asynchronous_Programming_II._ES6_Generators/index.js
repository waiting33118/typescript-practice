"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function numbersIteratorGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [4 /*yield*/, 4];
            case 4:
                _a.sent();
                return [4 /*yield*/, 5];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var numbersIter = numbersIteratorGenerator();
var iterElement = numbersIter.next();
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
// console.log(numbersIter.next())
function generator1() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function generator2() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/, 3];
        }
    });
}
var iterResult1 = generator1();
var iterResult2 = generator2();
// console.log(iterResult1.next())
// console.log(iterResult1.next())
// console.log(iterResult1.next())
// console.log(iterResult1.next())
// console.log(iterResult2.next())
// console.log(iterResult2.next())
// console.log(iterResult2.next())
// console.log(iterResult2.next())
function generatorFunc() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Iterator created!');
                return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
// console.log('before create iterator')
// let iterator = generatorFunc()
// console.log(iterator)
// console.log('after create iterator')
// console.log('Before invoke')
// console.log(iterator.next())
// console.log('after invoke')
function fibonacci() {
    var n0, n1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                n0 = 1;
                n1 = 1;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, n0];
            case 2:
                _b.sent();
                return [3 /*break*/, 1];
            case 3:
                ;
                _a = [n1, n0 + n1], n0 = _a[0], n1 = _a[1];
                return [2 /*return*/];
        }
    });
}
// const fibSeries = fibonacci()
// for (let i = 0; i < 10; i++) {
//   console.log(fibSeries.next())
// }
function summationGenerator(defaultValue) {
    var total, _a;
    if (defaultValue === void 0) { defaultValue = 0; }
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                total = defaultValue;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                console.log(total);
                _a = total;
                return [4 /*yield*/, total];
            case 2:
                total = _a + (_b.sent());
                console.log(total);
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var summationIter = summationGenerator();
console.log(summationIter.next(5));
console.log(summationIter.next(7));
console.log(summationIter.next(11));
