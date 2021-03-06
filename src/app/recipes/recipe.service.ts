import { Recipe } from './recipe.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Spaghetti', 'Italian Spaghetti Bolognese',
         'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
         [ new Ingredient('Pasta', 1),
           new Ingredient('Tomato', 3),
           new Ingredient('Meat', 1)
         ]),
        new Recipe('Lasagne', 'Italian Lasagne',
         'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/lasagne_bolognese_01.jpg',
         [ new Ingredient('Pasta', 3),
           new Ingredient('Tomato', 1),
           new Ingredient('Meat', 1),
           new Ingredient('Cheese', 1)
         ])
      ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
    }

}