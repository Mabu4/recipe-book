import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipe/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient!: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sls.getIngredients();
  }

  onSelectItem(ingredient: Ingredient){
    this.selectedIngredient = ingredient;
  }

  onCleared(){
    this.selectedIngredient = null;
  }

}
