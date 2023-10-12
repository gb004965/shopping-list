import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test Recipe', 'https://img.taste.com.au/pUWqjn9Q/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg' ),
    new Recipe('A Test Recipe', 'This is simply a Test Recipe', 'https://img.taste.com.au/pUWqjn9Q/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg' )
  ];

  constructor() { }

  ngOnInit(){

  }

}
