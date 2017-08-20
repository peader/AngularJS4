import { Component, OnInit } from '@angular/core';
import{ ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopp-list',
  templateUrl: './shopp-list.component.html',
  styleUrls: ['./shopp-list.component.css']
})
export class ShoppListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('apples', 5),
    new ingredient('tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
