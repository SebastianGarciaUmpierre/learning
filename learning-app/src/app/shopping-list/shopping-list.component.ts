import { Component, OnInit, OnDestroy} from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { ShoppingListService } from './shopping-list.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // Imported as provider to the app module
  // providers: [ ShoppingListService ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe((
      ingredients : Ingredients[]) => {
        this.ingredients = ingredients;
      } )
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
