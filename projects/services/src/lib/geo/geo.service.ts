import { Inject, Injectable } from '@angular/core'
import { API, AppApiInterface } from '@constants'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, interval, Observable, of, Subject } from 'rxjs'
import {
  publishReplay,
  refCount,
  repeatWhen,
  take, tap
} from 'rxjs/operators'
import {
  GeoContractModel,
  GeoContractPublicAssistanceModel,
  GeoLayersModel,
} from './geo.model'

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private apiGetGeoContracts = new URL('/geo/contracts', this.api.geo)
  private apiRegisterOnContract = new URL('/geo/register', this.api.geo)
  private apiGetGeoLayers = new URL('/geo/layers', this.api.geo)

  private geoContracts$: Observable<GeoContractModel[]> = this.http.get<GeoContractModel[]>(this.apiGetGeoContracts.href, {
    headers: {
      accept: 'application/json; charset=utf-8'
    }
  }).pipe(
    repeatWhen(vl => interval(3000)),
    publishReplay(1),
    refCount()
  )

  private geoLayers$: Observable<GeoLayersModel> = this.http.get<GeoLayersModel>(this.apiGetGeoLayers.href, {
    headers: {
      accept: 'application/json; charset=utf-8'
    }
  }).pipe(publishReplay(1), refCount())

  constructor (
    private readonly http: HttpClient,
    @Inject(API) private readonly api: AppApiInterface
  ) {}

  public get geoContracts (): Observable<GeoContractModel[]> {
    return this.geoContracts$.pipe(
      tap((data) => {
        console.log('get contacts')
      })
    )
  }

  public get geoLayers (): Observable<GeoLayersModel> {
    return this.geoLayers$.pipe(take(1))
  }

  public registerToContract (address: string, data: GeoContractPublicAssistanceModel) {
    return this.http.post<void>(this.apiRegisterOnContract.href + '/' + address, data, {
      headers: {
        accept: 'application/json; charset=utf-8'
      }
    })
  }
}
