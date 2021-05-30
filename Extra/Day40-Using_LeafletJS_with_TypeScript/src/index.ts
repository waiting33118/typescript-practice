import L, { LatLngExpression, LayerGroup } from 'leaflet'
import mapConfig from './map.config'
import fetchData from './fetchData'
import { districtLatLngMap, districts } from './districtData'
import { Districts } from './data'

const districtEl = <HTMLSelectElement | null>(
  document.getElementById('select-district')
)

if (districtEl === null) {
  throw new Error('DOM Element not found!')
}

districts.forEach((district) => {
  const optionEl = document.createElement('option')
  optionEl.setAttribute('value', district)
  optionEl.innerText = district
  districtEl.appendChild(optionEl)
})

const { coordinates, zoomLevel, titleLayerURL, containerID } = mapConfig

const map = L.map(containerID)
map.setView(coordinates, zoomLevel)
L.tileLayer(titleLayerURL).addTo(map)

let markerLayer: LayerGroup

let currentDistrict = districtEl.value as Districts

function updateUBikeMap(district: Districts): void {
  fetchData().then((ubikeInfo) => {
    const selectedData = ubikeInfo.filter(
      (info) => info.regionName === district
    )

    const markers = selectedData.map((ubikeInfo) => {
      const marker = L.marker(ubikeInfo.latLng)

      marker.bindTooltip(`
      <p>${ubikeInfo.regionName} - ${ubikeInfo.stopName}</p>
      <p>Total Bikes: ${ubikeInfo.totalBikes}</p>
      <p>Available: ${ubikeInfo.availableBikes}</p>
      `)

      marker.on('mouseover', () => {
        marker.openTooltip()
      })
      marker.on('mouseout', () => {
        marker.closeTooltip()
      })

      return marker
    })

    markerLayer = L.layerGroup(markers)
    markerLayer.addTo(map)

    const targetCoords = districtLatLngMap.get(district) as LatLngExpression
    map.flyTo(targetCoords, 14)
  })
}

updateUBikeMap(currentDistrict)

districtEl.addEventListener('change', (event) => {
  let { value } = event.target as HTMLSelectElement

  currentDistrict = value as Districts
  markerLayer.remove()

  updateUBikeMap(currentDistrict)
})
