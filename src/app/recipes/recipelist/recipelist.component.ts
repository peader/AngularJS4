import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})

export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://www.google.de/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwixyeXD_tTVAhWCmbQKHXfuBSYQjRwIBw&url=http%3A%2F%2Fallrecipes.com%2Frecipes%2F84%2Fhealthy-recipes%2F&psig=AFQjCNGuS0s0gaQ0tpARavMzb_AyOK1M1A&ust=1502740433295987')
  ];
  constructor() { }

  ngOnInit() {
  }

}
