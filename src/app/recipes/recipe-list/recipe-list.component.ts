import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes : Recipe[] = [
		new Recipe('Recipe 1','This is a description of recipe 1',''),
		new Recipe('Recipe 2','This is a description of recipe 2','http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/2/FNM_090112-Weeknight-Lasagna-Dinner-Recipe_s4x3.jpg.rend.hgtvcom.966.725.jpeg'),
		new Recipe('Recipe 3','This is a description of recipe 3','http://www.seriouseats.com/images/2016/12/20161226-staff-picks-best-recipes-2016-chicken-with-cabbage.jpg'),
	];

	constructor() { }

	ngOnInit() {

	}

	onRecipeSelected(recipe : Recipe){
		this.recipeWasSelected.emit(recipe);
	}

}
