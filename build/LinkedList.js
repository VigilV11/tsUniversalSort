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
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        var node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(data);
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            throw new Error('Linked List is empty');
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var count = 0;
            var node = this.head;
            while (node) {
                count++;
                node = node.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    // given an index return the Node at the index
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    // We will cheat and only swap data, not the node!
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [
            this.at(leftIndex).data,
            this.at(rightIndex).data,
        ], this.at(rightIndex).data = _a[0], this.at(leftIndex).data = _a[1];
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
