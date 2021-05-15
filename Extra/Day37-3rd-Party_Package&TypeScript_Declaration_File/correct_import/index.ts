import $ from 'jquery'

$(document).ready(function () {
  const $btn = $('#main-btn')
  const $count = $('#count')
  let count = 0

  $btn.click(() => {
    count++
    $count.text(count)
  })
})
