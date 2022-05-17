import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
          'Pizza', 
          'Italienische Pizza mit frischen Chillis und Tomaten', 
          '../../../assets/img/pizza.jpg',
          [
            new Ingredient('Mehl', 200),
            new Ingredient('Wasser', 100),
            new Ingredient('Käse', 100),
            new Ingredient('Chillis', 50),
            new Ingredient('Tomaten', 200),
          ]),
        new Recipe(
          'Lasagne', 
          'Mit Bolognese Sauce und viel Käse', 
          '../../../assets/img/lasagne.jpg',
          [
            new Ingredient('Teigblätter', 250),
            new Ingredient('Rinderhack', 400),
            new Ingredient('passierte Tomaten', 500),
            new Ingredient('Käse', 200)
          ]),
        new Recipe(
          'Broccoli Auflauf', 
          'Mit Kartoffeln und Sahnesauce', 
          '../../../assets/img/broccoli.jpg',
          [
            new Ingredient('Broccoli', 250),
            new Ingredient('Kartoffel', 400),
            new Ingredient('Sahne', 500),
            new Ingredient('Käse', 200)
          ]),
        new Recipe(
          'Pasta', 
          'Mit Bolognese Sauce und frischen Kräutern', 
          '../../../assets/img/pasta.jpg',
          [
            new Ingredient('Nudeln', 300),
            new Ingredient('gehackte Tomaten', 500),
            new Ingredient('Sahne', 500),
            new Ingredient('Kräuter', 100)
          ]),
        new Recipe(
          'Weizenbrot', 
          'Schnell und einfach mit bestem Geschmack', 
          '../../../assets/img/bread.jpg',
          [
            new Ingredient('Weizenmehl', 400),
            new Ingredient('Wasser', 200),
            new Ingredient('Öl', 50),
            new Ingredient('Hefe', 7)
          ]),
        new Recipe(
          'Croissant', 
          'Französische Croissants wie aus der Camargue', 
          '../../../assets/img/croissant.jpg',
          [
            new Ingredient('Mehl', 300),
            new Ingredient('Wasser', 150),
            new Ingredient('Butter', 100),
            new Ingredient('Hefe', 5),
            new Ingredient('Honig', 50)
          ]),
    ];

    getRecipes(){
        return this.recipes;
    }
    getRecipe(id: number){
      return this.recipes[id];
    }

    deleteRecipe(id: number){
      this.recipes.splice(id, 1);
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

}