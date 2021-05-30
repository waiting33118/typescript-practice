import L from 'leaflet'
import mapConfig from './map.config'
import fetchData from './fetchData'

const { coordinates, zoomLevel, titleLayerURL, containerID } = mapConfig


const map = L.map(containerID)

map.setView(coordinates, zoomLevel)

L.tileLayer(titleLayerURL).addTo(map)

fetchData().then(data => {
  
  console.log(data)
})