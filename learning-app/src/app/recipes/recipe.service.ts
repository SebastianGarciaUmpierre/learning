import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();


   private recipes: Recipe[] = [
        // pass the 3 required arguments to create a new Recipe Object
        new Recipe(
          "Test Recipe 1",
          "This is a test",
          "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg",
          [
            new Ingredients('Cheese', 1),
            new Ingredients('Ground Beef', 1),
            new Ingredients('Buns', 1)
          ]
        ),
        new Recipe(
          "Pizza Pie",
          "This is a test 2",
          "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg",
          [
            new Ingredients('Cheese', 1),
            new Ingredients('Ground Beef', 1)
          ]
        ),
        new Recipe(
          "Test Recipe 3",
          "This is a test 3",
          "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg",
          [
            new Ingredients('Cheese', 1),
            new Ingredients('Ground Beef', 1)
          ]
        ),
        new Recipe(
          "Test Recipe 4",
          "This is a test 4",
          "https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg",
          [
            new Ingredients('Cheese', 1),
            new Ingredients('Ground Beef', 1)
          ]
        )
      ];

      constructor( private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}