"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
var Sorter_1 = require("./Sorter");
var StringCollection = /** @class */ (function (_super) {
    __extends(StringCollection, _super);
    function StringCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var characters = this.data.split('');
        _a = [
            characters[leftIndex],
            characters[rightIndex],
        ], characters[rightIndex] = _a[0], characters[leftIndex] = _a[1];
        this.data = characters.join('');
    };
    StringCollection.prototype.print = function () {
        console.log(this.data);
    };
    return StringCollection;
}(Sorter_1.Sorter));
exports.StringCollection = StringCollection;
