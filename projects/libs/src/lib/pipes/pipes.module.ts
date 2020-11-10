import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RelativeRoutePipe, RoutePipe, RoutesPipe } from './route-path.pipe'
import { HexagonPipe } from '@libs/pipes/hexagon.pipe'

@NgModule({
  declarations: [
    RoutePipe,
    RoutesPipe,
    RelativeRoutePipe,
    HexagonPipe
  ],
  imports: [CommonModule],
  exports: [
    RoutePipe,
    RoutesPipe,
    RelativeRoutePipe,
    HexagonPipe
  ]
})
export class PipesModule {}
