import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Rice", 1, "cup"),
    new Ingredient("Tomato", 3, "piece")
  ];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: Ingredient) {
    event.preventDefault();
    this.ingredients.push(ingredient);
  }
}
