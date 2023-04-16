import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  cuisines: string[] = ['All', 'German', 'Chinese', 'American', 'Indian', 'Pizza', 'Vegetarian']

  constructor() { }

  ngOnInit(): void {
  }

}
