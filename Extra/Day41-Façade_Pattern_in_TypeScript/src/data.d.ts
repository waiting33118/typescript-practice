import { LatLngExpression } from 'leaflet'

declare type Districts =
  | '中正區'
  | '大同區'
  | '中山區'
  | '松山區'
  | '大安區'
  | '萬華區'
  | '信義區'
  | '士林區'
  | '北投區'
  | '內湖區'
  | '南港區'
  | '文山區'

declare type SourceUBikeInfo = {
  act: string
  ar: string
  aren: string
  bemp: number
  infoDate: string
  infoTime: string
  lat: number
  lng: number
  mday: string
  sarea: string
  sareaen: string
  sbi: number
  sna: string
  snaen: string
  sno: string
  srcUpdateTime: string
  tot: number
  updateTime: string
}

declare type UBikeInfo = {
  availableBikes: number // sbi
  totalBikes: number // tot
  latLng: LatLngExpression // lat,lng
  regionName: string // sarea
  stopName: string // sna
}
