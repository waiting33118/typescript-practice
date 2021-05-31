import { Districts, UBikeInfo } from './data'
import mapConfig from './map.config'
import UBikeMapFacade from './UBikeMapFacade'
import fetchUBikeData from './fetchData'
import { districts } from './districtData'

const selectDistrictEl = <HTMLSelectElement | null>(
  document.getElementById('select-district')
)

if (selectDistrictEl === null) throw new Error('Dom Element Not Found!')

districts.forEach((district) => {
  const optionEl = document.createElement('option')
  optionEl.setAttribute('value', district)
  optionEl.innerText = district
  selectDistrictEl.appendChild(optionEl)
})

const mapFacade = new UBikeMapFacade(mapConfig, (info: UBikeInfo) => {
  return `
  <p>${info.regionName} - ${info.stopName}</p>
  <p>Total Bikes: ${info.totalBikes}</p>
  <p>Available: ${info.availableBikes}</p>
  `
})

let currentDistrict = selectDistrictEl.value as Districts

function updateUBikeMap(district: Districts): void {
  fetchUBikeData().then((data) => {
    const selectedData = data.filter((info) => info.regionName === district)
    mapFacade.pinStops(selectedData)
  })
}

updateUBikeMap(currentDistrict)

selectDistrictEl.addEventListener('change', (event) => {
  let { value } = event.target as HTMLSelectElement
  currentDistrict = value as Districts

  mapFacade.clearStops()

  updateUBikeMap(currentDistrict)
})
