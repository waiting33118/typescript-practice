"use strict";
var btnEl = document.querySelector('#button');
var counterEl = document.querySelector('#count');
if (btnEl === null || counterEl === null) {
    throw new Error('Element shouldn\'t be null');
}
var counter = 0;
btnEl.addEventListener('click', function () {
    counter++;
    console.log('Click');
    counterEl.innerHTML = counter.toString();
});
//# sourceMappingURL=index.js.map