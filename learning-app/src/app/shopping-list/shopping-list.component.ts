import { Component, OnInit} from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('apple', 5),
    new Ingredients('pear', 8),
    new Ingredients('orange', 3),
  ]

  constructor() { }

  ngOnInit() {
  }

  // Take ingredient argument and push to ingredients array
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

}
