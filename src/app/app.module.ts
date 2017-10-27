import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowService } from './services/show.service';

import { RoutingModule} from './app.routes';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { SearchByPipe } from './pipes/search-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TvShowDetailComponent,
    TvListComponent,
    SearchByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
