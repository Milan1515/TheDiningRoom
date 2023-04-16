import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './restaurants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    RestaurantsComponent,
    RestaurantComponent,
    PaginationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
