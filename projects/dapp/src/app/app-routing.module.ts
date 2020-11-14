import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonLayoutComponent } from '@ui/layout/common-layout'
import { environment } from '../environments/environment'

// IMPORTANT
// Get path in template:
// {{ constants.routes.listing | route }} -> 'listing' -> '/listing'
// {{ constants.routes.listing | route: 'param1' }} -> /listing/:id -> /listing/param1
// {{ constants.routes.listing | relativeRoute }}-> 'listing' -> 'listing'
// {{ constants.routes.listing | relativeRoute: 'param1' }} -> 'listing' -> 'listing/param1'
const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: environment.routing.application,
        loadChildren: () =>
          import('./pages/application-page/application-page.module').then((m) => m.ApplicationPageModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
