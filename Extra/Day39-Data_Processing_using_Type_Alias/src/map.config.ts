import { LatLngExpression } from "leaflet"

type MapConfig = {
  coordinates: LatLngExpression,
  zoomLevel: number,
  titleLayerURL: string,
  containerID: string
}

export default {
  coordinates: [25.0330, 121.5654],
  zoomLevel: 13,
  titleLayerURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  containerID: 'map'
} as MapConfig