"use strict";
var NormalIterator = /** @class */ (function () {
    function NormalIterator(items) {
        this.items = items;
        this.currentItem = undefined;
        this.currentIndex = 0;
        this.currentItem = items[0];
    }
    NormalIterator.prototype.isDone = function () {
        return this.currentItem === undefined;
    };
    NormalIterator.prototype.next = function () {
        if (this.isDone())
            throw new Error('Iterator out of bound!');
        this.currentIndex++;
        this.currentItem = this.items[this.currentIndex];
    };
    return NormalIterator;
}());
var MyArray = /** @class */ (function () {
    function MyArray(items) {
        this.items = items;
    }
    MyArray.prototype.createIterator = function () {
        return new NormalIterator(this.items);
    };
    return MyArray;
}());
var aCollection = new MyArray([1, 2, 3, 4, 5]);
var aIterator = aCollection.createIterator();
while (!aIterator.isDone()) {
    console.log("Iterated value: " + aIterator.currentItem);
    aIterator.next();
}
try {
    aIterator.next();
}
catch (error) {
    console.log('out of bound');
}
