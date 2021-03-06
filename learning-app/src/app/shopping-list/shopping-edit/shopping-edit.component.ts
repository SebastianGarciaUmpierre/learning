import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {Ingredients} from '../../shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number ) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdditem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
    this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  clearForm() {
    this.editMode = false;
    this.slForm.reset();
  }
  
  deleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }


}
