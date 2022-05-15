import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({ //ngModule ist nur dafür da, um Angular im Hintergrund mitzuteilen, welche generellen Bestandteile genutzt werden
  declarations: [ //welche Bestandteile hat unsere App eigentlich
    AppComponent, 
    HeaderComponent, 
    RecipeComponent, 
    ShoppingListComponent,
    RecipeListComponent, 
    RecipeDetailComponent, 
    RecipeItemComponent, 
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent] //von all diesen Bestandteilen, welche ich eigentlich die root Component (index.html)
})
export class AppModule { }
