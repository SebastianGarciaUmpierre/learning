import { Ingredients } from '../shared/Ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients('apple', 5),
        new Ingredients('pear', 8),
        new Ingredients('orange', 3),
      ]

      getIngredients() {
          return this.ingredients.slice()
      }

      addIngredient(ingredient: Ingredients) {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredients[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}