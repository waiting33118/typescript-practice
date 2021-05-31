import L from 'leaflet'
import { UBikeInfo } from './data'
import { MapConfig } from './map.config'
import MapInitializer from './ubike-map/MapInitializer'
import MapMarker from './ubike-map/MapMarker'
import MapMarkerLayer from './ubike-map/MapMarkerLayer'
import MapSingleton from './ubike-map/MapSingleton'

export default class UBikeMapFacade {
  private map: L.Map | null = MapSingleton.getInstance()
  private mapInitializer: MapInitializer
  private mapMarkerLayer: MapMarkerLayer

  constructor(
    config: MapConfig,
    public tooltipTemplate: (data: UBikeInfo) => string
  ) {
    if (this.map === null) {
      throw new Error("Map isn't correctly initialize")
    }

    this.mapInitializer = new MapInitializer(this.map, config)
    this.mapMarkerLayer = new MapMarkerLayer(this.map)
    this.mapInitializer.initialize()
  }

  pinStops(data: UBikeInfo[]) {
    const markers = data.map((info) => {
      const marker = MapMarker.create(info.latLng)
      marker.bindTooltip(this.tooltipTemplate(info))
      return marker
    })

    this.mapMarkerLayer.addMarkers(markers)
  }

  clearStops() {
    this.mapMarkerLayer.clear()
  }
}
