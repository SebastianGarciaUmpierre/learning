import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Ingredients} from '../../shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // View Child allows you to view local reference from HTML
  @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;


  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAdditem() {
    // Must use nativeElement.Value to get value of reference from input
    // Enter variables into Ingredients constructor then emit ingredient
    const newIngredient = new Ingredients(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
