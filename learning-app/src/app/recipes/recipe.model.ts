import { Ingredients } from '../shared/Ingredients.model';

export class Recipe {
  public name: String;
  public description: String;
  public image: String;
  public ingredients: Ingredients[];

  // use lowercase constructor in the model
  constructor(name: String, description: String, image: String, ingredients: Ingredients[]) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
  }
}
