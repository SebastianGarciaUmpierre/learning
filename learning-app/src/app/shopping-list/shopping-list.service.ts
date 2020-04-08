import { Ingredients } from '../shared/Ingredients.model';

import { Subject } from 'rxjs';

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredients[]>();

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
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredients[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}