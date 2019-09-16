import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Indian curry",
      "A test",
      "https://www.freeiconspng.com/uploads/recipe-box-home-page-icon-19.png",
      40
    ),
    new Recipe(
      "test curry",
      "A test 2",
      "https://www.acecleanuk.co.uk/wp-content/uploads/images/curry-320.png",
      40
    ),
    new Recipe(
      "test salad",
      "A test 3",
      "https://www.pngarts.com/files/2/Salad-PNG-Download-Image.png",
      40
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
