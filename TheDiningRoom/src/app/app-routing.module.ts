import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "restaurants/:cuisine", component: RestaurantsComponent},
  {path: "", redirectTo: "/home", pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
