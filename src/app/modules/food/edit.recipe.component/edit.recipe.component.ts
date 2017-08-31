import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Recipe } from '../../../models/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { RecipeInterface } from '../../../interfaces/recipe';
import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-edit.recipe',
  templateUrl: './edit.recipe.component.html',
  styleUrls: ['./edit.recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  private recipeDataService: RecipeData;
  auth: AuthService;
  recipeKey: string;
  recipe: RecipeInterface;

  public recipeForm: FormGroup;

  categories = ['breakfast', 'soups', 'salads', 'desserts', 'breads', 'main dishes', 'side dishes'];

  public titleFormControl: AbstractControl;
  public authorFormControl: AbstractControl;
  public categoryFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;
  public ingredientsFormControl: AbstractControl;
  public stepFirstFormControl: AbstractControl;
  public stepSecondFormControl: AbstractControl;
  public stepThirdFormControl: AbstractControl;
  public imageFormControl: AbstractControl;

  constructor(private route: ActivatedRoute,
    private router: Router,
    recipeDataService: RecipeData,
    auth: AuthService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder) {
    this.recipeDataService = recipeDataService;
    this.auth = auth;
    this.recipe = new Recipe();
  }

  ngOnInit() {
    this.recipeKey = this.route.snapshot.params['id'];
    this.recipeDataService.getRecipeById(this.recipeKey).subscribe((result) => this.recipe = result);
    console.log(this.recipeKey);

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
    this.recipeDataService.editRecipe(this.recipeKey, this.recipe);
    this.notificationService.popToast('info', 'Success!', 'Your recipe was updated successfully!');

    this.router.navigate(['recipes']);
  }
}
