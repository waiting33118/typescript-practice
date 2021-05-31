import { LatLngExpression } from 'leaflet'

export type MapConfig = {
  coordinates: LatLngExpression
  zoomLevel: number
  tileLayerURL: string
  containerID: string
}

export default {
  coordinates: [25.033, 121.5654],
  zoomLevel: 13,
  tileLayerURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  containerID: 'map'
} as MapConfig
