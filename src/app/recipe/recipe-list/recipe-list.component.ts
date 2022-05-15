import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('DUmmy', 'Dummy2', '../../../assets/img/1.jpg');
  selectedRecipe!: Recipe;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
