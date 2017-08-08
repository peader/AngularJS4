import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppinglisteditComponent } from './shopp-list/shoppinglistedit/shoppinglistedit.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppListComponent } from './shopp-list/shopp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
