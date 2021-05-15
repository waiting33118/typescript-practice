"use strict";
$(document).ready(function () {
    var $btn = $('#main-btn');
    var $count = $('#count');
    var count = 0;
    $btn.click(function () {
        count++;
        $count.text(count);
    });
});
