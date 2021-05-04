const btnEl = document.querySelector('#button')
const counterEl = document.querySelector('#count')

if (btnEl === null || counterEl === null) {
  throw new Error('Element shouldn\'t be null')

}

let counter = 0

btnEl.addEventListener('click', () => {
  counter++
  console.log('Click')

  counterEl.innerHTML = counter.toString()
})