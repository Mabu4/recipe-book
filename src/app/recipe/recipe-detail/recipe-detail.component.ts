import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe!: Recipe;
  recipeId!: number;

  private subscribtion!: Subscription;

  constructor(
    private recipeService: RecipeService, 
    private sls: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribtion = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']);
  }

  onDelete() {
    this.router.navigate(['/rezepte']);
    this.recipeService.deleteRecipe(this.recipeId);
  }

}
