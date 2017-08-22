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
  public categoryFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;
  public ingredientsFormControl: AbstractControl;
  public stepFirstFormControl: AbstractControl;
  public stepSecondFormControl: AbstractControl;
  public stepThirdFormControl: AbstractControl;
  public imageFormControl: AbstractControl;

  constructor(private recipedata: RecipeData, private formBuilder: FormBuilder) {
     this.recipe = new Recipe();
    //  const userId = firebase.auth().currentUser.uid;
   }


  ngOnInit(): void {
    this.titleFormControl = new FormControl('', [
      Validators.required]);

    this.authorFormControl = new FormControl('', [
      Validators.required]);

    this.categoryFormControl = new FormControl('', [
      Validators.required]);

    this.descriptionFormControl = new FormControl('', [
      Validators.required]);

    this.ingredientsFormControl = new FormControl('', [
      Validators.required]);

    this.stepFirstFormControl = new FormControl('', [
      Validators.required]);

    this.stepSecondFormControl = new FormControl();

    this.stepThirdFormControl = new FormControl();

    this.imageFormControl = new FormControl('', [
      Validators.required]);

    this.recipeForm = this.formBuilder.group({
      titleFormControl: this.titleFormControl,
      authorFormControl: this.authorFormControl,
      categoryFormControl: this.categoryFormControl,
      descriptionFormControl: this.descriptionFormControl,
      ingredientsFormControl: this.ingredientsFormControl,
      stepFirstFormControl: this.stepFirstFormControl,
      stepSecondFormControl: this.stepSecondFormControl,
      stepThirdFormControl: this.stepThirdFormControl,
      imageFormControl: this.imageFormControl
    });
  }

  onSubmit() {
  }

}
