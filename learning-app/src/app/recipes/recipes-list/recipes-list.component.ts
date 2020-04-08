import { Component, OnInit } from "@angular/core";
// Import Recipe Model
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {


  // recipes list will be a list of Recipe Objects from the Model
  recipes: Recipe[];
  

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
 
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
