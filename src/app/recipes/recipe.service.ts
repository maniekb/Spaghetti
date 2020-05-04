import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Spaghetti', 'Italian Spaghetti Bolognese', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg'),
        new Recipe('Lasagne', 'Italian Lasagne', 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/lasagne_bolognese_01.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}