import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { Recipe } from '../../../models/recipe';
import { RecipeData } from '../../../services/recipe-data.service';

@Component({
  selector: 'app-create.resipe.form',
  templateUrl: './create.resipe.form.component.html',
  styleUrls: ['./create.resipe.form.component.css']
})

export class CreateFormComponent implements OnInit {

  public title: string;
  public author: string;
  public category: string;
  public createdOn: any;
  public description: string;
  public ingradients: any;
  public steps: any;
  public image: string;
  public comments: any;
  public userId: any;

  recipe: Recipe;
  categories = ['breakfast', 'soups', 'salads', 'desserts', 'breads', 'main dishes', 'side dishes'];

  public recipeForm: FormGroup;
  public titleFormControl: AbstractControl;
  public authorFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;

  constructor(private recipedata: RecipeData, private formBuilder: FormBuilder) {
     this.recipe = new Recipe();
    //  const userId = firebase.auth().currentUser.uid;
   }


  ngOnInit(): void {
  }



  onSubmit() {
  }

}
