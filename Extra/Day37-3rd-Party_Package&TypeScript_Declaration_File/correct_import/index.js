var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    jquery_1.default(document).ready(function () {
        var $btn = jquery_1.default('#main-btn');
        var $count = jquery_1.default('#count');
        var count = 0;
        $btn.click(function () {
            count++;
            $count.text(count);
        });
    });
});
