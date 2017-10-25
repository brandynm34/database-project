import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from  './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
