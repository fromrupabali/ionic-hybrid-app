import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'recipie1',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg',
      ingredients: ['French fry', 'Pork Meat']
    },
    {
      id: 'r1',
      title: 'recipie1',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg',
      ingredients: ['French fry', 'Pork Meat']
    },
    {
      id: 'r1',
      title: 'recipie1',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg',
      ingredients: ['French fry', 'Pork Meat']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
