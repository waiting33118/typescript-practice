import { SourceUBikeInfo, UBikeInfo } from './data'

let URL =
  'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

export default function fetchUBikeData(url = URL) {
  return fetch(url)
    .then((result) => result.json())
    .then((uBikeInfos: SourceUBikeInfo[]) =>
      uBikeInfos.map(
        (info) =>
          ({
            availableBikes: info.sbi,
            totalBikes: info.tot,
            latLng: [info.lat, info.lng],
            regionName: info.sarea,
            stopName: info.sna
          } as UBikeInfo)
      )
    )
}
