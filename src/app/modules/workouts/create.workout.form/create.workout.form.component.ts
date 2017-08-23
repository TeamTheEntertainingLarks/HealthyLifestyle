import { Routine } from './../../../models/routine';
import { Workout } from './../../../models/workout';
import { WorkoutInterface } from './../../../interfaces/workout';
import { ModelFactory } from './../../../services/factories/model.factory';
import { WorkoutData } from './../../../services/workouts-data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Category } from '../../../enums/workoutCategories';

@Component({
  selector: 'app-create.workout.form',
   providers: [
    WorkoutData
  ],
  templateUrl: './create.workout.form.component.html',
  styleUrls: ['./create.workout.form.component.css']
})
export class CreateWorkoutFormComponent implements OnInit {

  public workout: WorkoutInterface;
  public workouts: Array<WorkoutInterface>;

  private factory: ModelFactory;
  private workoutDataService: WorkoutData;
  auth: AuthService;
  public title: string;
  public author: string;
  public createdOn: number;
  public category: Category;
  public routines: Array<Routine>;
  public description: string;
  public comments: string[];

  public userId: any;

  // omg hi
  public workoutForm: FormGroup;

  public titleFormControl: AbstractControl;
  public authorFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;
  public imageFormControl: AbstractControl;

   constructor(
    private router: Router,
    workoutDataService: WorkoutData,
    factory: ModelFactory,
    auth: AuthService,
    private formBuilder: FormBuilder) {
    this.factory = factory;
    this.workoutDataService = workoutDataService;
    this.auth = auth;
    this.workout = new Workout();
}
  ngOnInit(): void {
      this.titleFormControl = new FormControl('', [
      Validators.required]);

    this.authorFormControl = new FormControl('', [
      Validators.required]);

    this.descriptionFormControl = new FormControl('', [
      Validators.required]);

    this.imageFormControl = new FormControl('', [
      Validators.required]);

    this.workoutForm = this.formBuilder.group({
      titleFormControl: this.titleFormControl,
      authorFormControl: this.authorFormControl,
      descriptionFormControl: this.descriptionFormControl,
      imageFormControl: this.imageFormControl
    });
  }

  // omg hi
  onSubmit(title: string,
    author: string,
    createdOn: number,
    category: Category,
    routines: Array<Routine>,
    description: string,
    image: string,
    comments?: Array<string>) {
          title = this.workout.title;
          author = this.workout.author;
          routines = this.routines;
          category = this.category;
          createdOn = Date.now();
          description = this.workout.description;
          comments = this.workout.comments;
          this.userId = this.auth.currentUser.uid;
           //  const userId = firebase.auth().currentUser.uid;

      this.workout = this.factory
      .createWorkout(title, author, createdOn, category, routines, description, comments);
      this.workoutDataService.add(this.workout);

      this.router.navigate(['workouts']);
  }
}
