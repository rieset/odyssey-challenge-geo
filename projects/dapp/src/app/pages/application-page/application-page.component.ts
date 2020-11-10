import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { GeoService } from '@services/geo/geo.service'

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationPageComponent implements OnInit, AfterViewInit {
  public contracts$ = this.geoService.geoContracts

  public lat = 52.353571
  public lng = 4.88427

  constructor (
      private geoService: GeoService
  ) {
  }

  ngOnInit (): void {}

  ngAfterViewInit () {}

  trackByFn (index: number) {
    return index
  }
}
