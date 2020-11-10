export interface GeoContractModel {
  x: number
  y: number
  z: number
  zoom: number
  address: string
  point: {lat: number, lng: number}
  assistants: GeoContractPublicAssistanceModel[]
}

export interface GeoContractUpdatedModel extends GeoContractModel {
  distance: number,
  contain: boolean
}

export interface GeoContractPublicAssistanceModel {
  alias: string
  color: string
  certificates: string
}

export type GeoLayersModel = GeoContractUpdatedModel[][]
