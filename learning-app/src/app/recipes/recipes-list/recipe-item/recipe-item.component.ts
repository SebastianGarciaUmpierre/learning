import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: {name: string, description: string, image: string}
  // use Recipe Model created in recipes folder instead of creating new constructor
  @Input() recipe: Recipe;

  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  selectRecipe() {
    this.selectedRecipe.emit();
  }
}
