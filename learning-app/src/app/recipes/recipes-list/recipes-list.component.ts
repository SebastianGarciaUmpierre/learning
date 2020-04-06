import { Component, OnInit } from "@angular/core";
// Import Recipe Model
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {


  // recipes list will be a list of Recipe Objects from the Model
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
