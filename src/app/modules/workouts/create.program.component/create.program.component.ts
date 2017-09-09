import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ModelFactory } from './../../../services/factories/model.factory';
import { Routine } from './../../../models/routine';
import { Workout } from './../../../models/workout';
import { WorkoutData } from './../../../services/workouts-data.service';
import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router } from '@angular/router';
import { Difficulty } from '../../../enums/programDifficulty';
import { UploadService } from './../../../services/uploads/shared/upload.service';
import { Upload } from './../../../services/uploads/shared/upload';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-create-program',
  templateUrl: './create.program.component.html',
  styleUrls: ['./create.program.component.css']
})
export class CreateProgramComponent implements OnInit {
  public name: string;
  public difficulty: string;
  public description: string;
  public workout: any;
  public days: Array<any>;
  public workouts: Array<any>;
  public currentUpload: Upload;
  public programForm: FormGroup;
  public selectedFiles: FileList;
  public programNameControl: AbstractControl;
  public difficultiesFormControl: AbstractControl;
  public descriptionFormControl: AbstractControl;

  public difficulties: Array<string>;
  public workoutTitle: string;

  constructor(
    private router: Router,
    public workoutData: WorkoutData,
    private uploadService: UploadService,
    private factory: ModelFactory,
    private formBuilder: FormBuilder,
    public scrollToService: ScrollToService) {
    this.workouts = new Array<any>();
    this.add = false;
    this.days = new Array<any>();
    this.difficulties = new Array<string>();
  }

  public add: boolean;

  ngOnInit() {
    this.programNameControl = new FormControl('', [
      Validators.required]);

    this.difficultiesFormControl = new FormControl('', [
      Validators.required]);

    this.descriptionFormControl = new FormControl('', [
      Validators.required]);

    this.programForm = this.formBuilder.group({
      programNameControl: this.programNameControl,
      difficultiesFormControl: this.difficultiesFormControl,
      descriptionFormControl: this.descriptionFormControl,
    });

    this.workoutData.getAvailableWorkouts().subscribe(items => {
      items.forEach(item => {
        this.workouts.push(item);
      });
    });

    // tslint:disable-next-line:forin
    for (const enumMember in Difficulty) {
       const isValueProperty = parseInt(enumMember, 10) >= 0;
       if (isValueProperty) {
          this.difficulties.push(Difficulty[enumMember]);
       }
    }
  }

  addProgram() {
    const newProgram = {
      name: this.name,
      difficulty: this.difficulty,
      description: this.description,
      image: null,
      days: this.days,
    };
    this.workoutData.add(newProgram).then(key => {
      this.uploadSingle(key);
    }).then(() => {
      return this.router.navigate(['programs/all']);
    });

  }

  getAddForm(element) {
    this.add = true;
    setTimeout(() => {
      this.scrollToService.scrollTo(element);
    }, 100);
  }

  hideAddForm() {
    this.add = false;
  }

  skipDay() {
    const restDay = {
      checked: false,
    };
    this.days.push(restDay);
  }

  removeDay(index) {
    this.days.splice(index, 1);
  }

  addWorkout() {
    let currentWorkout: any;
    this.workoutData.getWorkoutByTitle(this.workoutTitle).subscribe(workouts => {
      currentWorkout = workouts[0];
    });

    const newDay = {
      workout: currentWorkout,
      checked: false,
    };

    this.days.push(newDay);
    this.add = false;
    //TODO - Clear Select
  }

  addNewWorkout(workout: any) {
    let currentWorkout: any;
    this.workoutData.getWorkoutByTitle(workout.title).subscribe(workouts => {
      currentWorkout = workouts[0];
    });

    const newDay = {
      workout: currentWorkout,
      checked: false,
    };

    this.days.push(newDay);
    this.add = false;
    //clear form
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle(key: string) {
    let dbPath: string;
    let storagePath: string;
    const file = this.selectedFiles.item(0);

    dbPath = `programs/${key}/image`;
    storagePath = `images/programs/${key}/${file.name}`;
    this.currentUpload = new Upload(file);
    return this.uploadService.uploadFile(storagePath, dbPath, this.currentUpload);
  }

  getDayColor(day) {
    const restDayColor = '#b39cdb';
    const workoutDayColor = '#8f70c9';
    if (day.workout != null) {
      return workoutDayColor;
    } else {
      return restDayColor;
    }
  }
}
