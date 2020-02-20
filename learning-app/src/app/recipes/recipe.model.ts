// Creates a model for a recipe
// Now when we want to create a Recipe Object, we will need to pass name, desc, and imageURL

export class Recipe {
    public name: String;
    public description: String;
    public image: String;

    // use lowercase constructor in the model
    constructor(name: String, description: String, image: String) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}