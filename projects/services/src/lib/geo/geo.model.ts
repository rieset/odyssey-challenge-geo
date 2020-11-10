export interface GeoContractModel {
  x: number
  y: number
  z: number
  zoom: number
  address: string
  point: {lat: number, lng: number}
  assistants: any[]
}

export interface GeoContractUpdatedModel extends GeoContractModel {
  distance: number,
  contain: boolean
}

export type GeoLayersModel = GeoContractUpdatedModel[][];
