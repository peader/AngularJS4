import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})

export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051--shot-recipes-the-sauce.jpg'),
    new Recipe('A test Recipe', 'this is simply a test', 'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051--shot-recipes-the-sauce.jpg')
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
