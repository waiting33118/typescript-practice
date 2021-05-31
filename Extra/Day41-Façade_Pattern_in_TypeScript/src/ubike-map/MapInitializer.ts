import { CustomMap } from './map'
import L from 'leaflet'
import { MapConfig } from '../map.config'

class MapInitializer implements CustomMap.Initializer {
  constructor(public readonly map: L.Map, public readonly config: MapConfig) {}

  public initialize() {
    const { map, config } = this
    const { coordinates, zoomLevel, tileLayerURL } = config

    map.setView(coordinates, zoomLevel)

    L.tileLayer(tileLayerURL).addTo(map)
  }
}

export default MapInitializer
