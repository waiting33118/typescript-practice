import { SourceUBikeInfo, UBikeInfo } from './data'

let URL =
  'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

export default async function fetchUBikeData(url = URL) {
  const result = await fetch(url)
  const resultToJSON: SourceUBikeInfo[] = await result.json()
  const UBikeInfo = resultToJSON.map(
    (info) =>
      ({
        availableBikes: info.sbi,
        totalBikes: info.tot,
        latLng: [info.lat, info.lng],
        regionName: info.sarea,
        stopName: info.sna
      } as UBikeInfo)
  )

  return UBikeInfo
}
