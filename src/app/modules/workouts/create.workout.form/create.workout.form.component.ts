import { CreateRoutineFormComponent } from './../create.routine.form/create.routine.form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Exercise } from './../../../models/exercise';
import { Routine } from './../../../models/routine';
import { Workout } from './../../../models/workout';
import { WorkoutInterface } from './../../../interfaces/workout';
import { ModelFactory } from './../../../services/factories/model.factory';
import { WorkoutData } from './../../../services/workouts-data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Category } from '../../../enums/workoutCategories';

@Component({
  selector: 'app-create-workout',
   providers: [
    WorkoutData
  ],
  templateUrl: './create.workout.form.component.html',
  styleUrls: ['./create.workout.form.component.css']
})
export class CreateWorkoutFormComponent implements OnInit {
  @Output() onCreate: EventEmitter<any>;
  public selectedOption: string;
  public workout: WorkoutInterface;
  private factory: ModelFactory;
  private workoutDataService: WorkoutData;
  auth: AuthService;
  public title: string;
  public createdOn: number;
  public showRoutineForm: boolean;
  public category: Category;

  public routines: Array<Routine>;
  public description: string;
  public comments: string[];

  public userId: any;
  public categories: Array<string>;
  public workoutForm: FormGroup;

  public titleFormControl: AbstractControl;
  public authorFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;
  public routinesFormControl: AbstractControl;
  public categoriesFormControl: AbstractControl;
  public availableRoutines: Array<Routine>;

   constructor(
    public dialog: MdDialog,
    private router: Router,
    workoutDataService: WorkoutData,
    factory: ModelFactory,
    auth: AuthService,
    private formBuilder: FormBuilder) {
    this.factory = factory;
    this.workoutDataService = workoutDataService;
    this.auth = auth;
    this.workout = new Workout();
    this.routines = new Array<Routine>();
    this.showRoutineForm = false;
    this.categories = new Array<string>();
    this.onCreate = new EventEmitter<any>();
}

  ngOnInit(): void {
      this.titleFormControl = new FormControl('', [
      Validators.required]);

    this.descriptionFormControl = new FormControl('', [
      Validators.required]);

    this.routinesFormControl = new FormControl('', [
      Validators.required]);

    this.categoriesFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.workoutForm = this.formBuilder.group({
      titleFormControl: this.titleFormControl,
      descriptionFormControl: this.descriptionFormControl,
      routinesFormControl: this.routinesFormControl,
      categoriesFormControl: this.categoriesFormControl,
    });

    this.routines = new Array<Routine>();
    this.workoutDataService.getAvailableRoutines().subscribe(items => {
        this.routines = new Array<Routine>();
        items.forEach(item => {
          const newRoutine = new Routine(item.exercise, item.repeatTimes, item.seriesCount, item.restingTime);
          this.routines.push(newRoutine);
        });
    });

    // tslint:disable-next-line:forin
    for (const enumMember in Category) {
       const isValueProperty = parseInt(enumMember, 10) >= 0;
       if (isValueProperty) {
          this.categories.push(Category[enumMember]);
       }
    }
  }

  showCreateRoutineForm(permission) {
    this.showRoutineForm = permission;
  }

    openDialog() {
    const dialogRef = this.dialog.open(CreateRoutineFormComponent,
    {
        height: '90%',
        width: '40%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  onSubmit(title: string,
    author: string,
    createdOn: number,
    category: string,
    routines: Array<Routine>,
    description: string,
    image: string,
    comments?: Array<string>) {
          title = this.workout.title;
          author = this.auth.currentUserDisplayName;
          routines = this.workout.routines;
          category = this.workout.category.toString();
          createdOn = Date.now();
          description = this.workout.description;
          comments = this.workout.comments;
          this.userId = this.auth.currentUser.uid;
           //  const userId = firebase.auth().currentUser.uid;

      this.workout = this.factory
      .createWorkout(title, author, createdOn, category, routines, description, comments);
      this.workoutDataService.addWorkout(this.workout);

      this.onCreate.emit(this.workout);
      this.workoutForm.reset();
  }
}
