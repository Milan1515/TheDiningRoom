import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/core/model/restaurant.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  restaurant: Restaurant = new Restaurant();
  constructor() { }

  ngOnInit(): void {
  }

}
