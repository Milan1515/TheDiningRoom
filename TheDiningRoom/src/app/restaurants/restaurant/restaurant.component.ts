import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/core/model/restaurant.model';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input()
  restaurant: Restaurant = new Restaurant();
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openMenu(): void {
		const modalRef = this.modalService.open(MenuComponent);
    modalRef.componentInstance.restaurant = this.restaurant
  }
}
