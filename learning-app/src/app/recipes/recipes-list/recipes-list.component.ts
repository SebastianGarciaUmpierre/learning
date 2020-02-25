import { Component, OnInit, EventEmitter, Output } from "@angular/core";
// Import Recipe Model
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // recipes list will be a list of Recipe Objects from the Model
  recipes: Recipe[] = [
    // pass the 3 required arguments to create a new Recipe Object
    new Recipe(
      "Test Recipe 1",
      "This is a test",
      "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg"
    ),
    new Recipe(
      "Test Recipe 2",
      "This is a test 2",
      "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg"
    ),
    new Recipe(
      "Test Recipe 3",
      "This is a test 3",
      "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg"
    ),
    new Recipe(
      "Test Recipe 4",
      "This is a test 4",
      "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
