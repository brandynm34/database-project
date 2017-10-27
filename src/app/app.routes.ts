import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from  './homepage/homepage.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component'
import {TvListComponent} from './tv-list/tv-list.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: "tv/:id",
    component: TvShowDetailComponent
  },
  {
    path: 'tv',
    component: TvListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
