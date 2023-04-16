import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantList } from '../core/model/restaurant-list.model';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: RestaurantList = new RestaurantList();
  params = {
    page: 1,
    pageSize: 9,
    filter: {
      cuisine: "",
      priceFrom: 1,
      priceTo: 5
    }
  }

  priceFromControl = new FormControl(1)
  priceToControl = new FormControl(5)
  
  constructor(private service: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let cuisine = params['cuisine']
      if (cuisine == 'All') cuisine = ""
      this.params.filter.cuisine = cuisine
      this.getRestaurants();
    })

  }
  getRestaurants(): void {
    this.service.getRestaurants(this.params).subscribe({
      next: (restaurants: RestaurantList) => { 
        this.restaurants = restaurants
      },
      error: (err: any) => { console.log(err) }
    })
  }
  onPageChanged(newPage: number): void {
    this.params.page = newPage
    this.getRestaurants();
  }

  onPriceChanged(): void {
    this.params.filter.priceFrom = this.priceFromControl.value || 1;
    this.params.filter.priceTo = this.priceToControl.value || 1;
    this.getRestaurants();
  }
}
