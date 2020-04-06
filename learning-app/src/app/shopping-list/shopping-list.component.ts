import { Component, OnInit} from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { ShoppingListService } from './shopping-list.service'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // Imported as provider to the app module
  // providers: [ ShoppingListService ]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((
      ingredients : Ingredients[]) => {
        this.ingredients = ingredients;
      } )
  }


}
