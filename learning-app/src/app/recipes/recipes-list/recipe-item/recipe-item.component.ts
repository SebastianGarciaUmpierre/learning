import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from '../../recipe.service';

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: {name: string, description: string, image: string}
  // use Recipe Model created in recipes folder instead of creating new constructor
  @Input() recipe: Recipe;



  constructor( private recipeService: RecipeService) {}

  ngOnInit() {}

  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
