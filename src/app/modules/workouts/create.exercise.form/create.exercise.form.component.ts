import { UploadService } from './../../../services/uploads/shared/upload.service';
import { Upload } from './../../../services/uploads/shared/upload';
import { WorkoutData } from './../../../services/workouts-data.service';
import { ModelFactory } from './../../../services/factories/model.factory';
import { AuthService } from './../../../services/auth.service';
import { Exercise } from './../../../models/exercise';
import { FormGroup, AbstractControl, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create.exercise.form.component.html',
  styleUrls: ['./create.exercise.form.component.css']
})
export class CreateExerciseFform implements OnInit {

  public exercise: Exercise;
  private factory: ModelFactory;
  public currentUpload: Upload;
  private workoutDataService: WorkoutData;
  private auth: AuthService;

  public selectedFiles: FileList;
  public workoutForm: FormGroup;
  public nameFormControl: AbstractControl;
  public imageFormControl: AbstractControl;

   constructor(
    workoutDataService: WorkoutData,
    factory: ModelFactory,
    auth: AuthService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService) {
    this.factory = factory;
    this.workoutDataService = workoutDataService;
    this.auth = auth;
    this.exercise = new Exercise();
}

  ngOnInit() {
    this.nameFormControl = new FormControl('', [
      Validators.required]);

    this.imageFormControl = new FormControl('', [
      Validators.required]);

    this.workoutForm = this.formBuilder.group({
      nameFormControl: this.nameFormControl,
      imageFormControl: this.imageFormControl,
    });
  }
  //TODO - IMAGE
  onSubmit(name: string) {
      name = this.exercise.name;

      this.exercise = this.factory.createExercise(name);
      this.workoutDataService.addExercise(this.exercise);

  }
}
