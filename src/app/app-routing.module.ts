import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RECIPE_ROUTES } from './recipe/recipe.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/rezepte', pathMatch: 'full'},
  {path: 'rezepte', component: RecipeComponent, children: RECIPE_ROUTES},
  {path: 'einkaufsliste', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
