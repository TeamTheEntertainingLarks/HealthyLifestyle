import { UploadService } from './../../../services/uploads/shared/upload.service';
import { Upload } from './../../../services/uploads/shared/upload';
import { WorkoutData } from './../../../services/workouts-data.service';
import { ModelFactory } from './../../../services/factories/model.factory';
import { AuthService } from './../../../services/auth.service';
import { Exercise } from './../../../models/exercise';
import { FormGroup, AbstractControl, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create.exercise.form.component.html',
  styleUrls: ['./create.exercise.form.component.css']
})
export class CreateExerciseFform implements OnInit {

  @Output()
  public hideExerciseForm: EventEmitter<boolean>;
  public exercise: Exercise;
  private factory: ModelFactory;
  public currentUpload: Upload;
  private workoutDataService: WorkoutData;
  private auth: AuthService;
  private uploadService: UploadService;
  public selectedFiles: FileList;
  public workoutForm: FormGroup;
  public nameFormControl: AbstractControl;
  public imageFormControl: AbstractControl;

   constructor(
    workoutDataService: WorkoutData,
    factory: ModelFactory,
    auth: AuthService,
    uploadService: UploadService,
    private formBuilder: FormBuilder) {
    this.factory = factory;
    this.uploadService = uploadService;

    this.workoutDataService = workoutDataService;
    this.auth = auth;
    this.exercise = new Exercise();
    this.hideExerciseForm = new EventEmitter<boolean>();
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
  onSubmit(name: string) {
      name = this.exercise.name;
      this.exercise = this.factory.createExercise(name);
      this.workoutDataService.addExercise(this.exercise);
      this.uploadSingle(name);
      this.hideExerciseForm.emit(true);
  }

  onClose() {
    this.hideExerciseForm.emit(true);
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle(name: string) {
    const exerciseKey = this.workoutDataService.getExerciseSnapshot(name).key;
    const file = this.selectedFiles.item(0);
    const dbPath = `workouts/exercises/${exerciseKey}/image`;
    const storagePath = `images/exercises/${exerciseKey}/${file.name}`;

    this.currentUpload = new Upload(file);
    this.uploadService.uploadFile(storagePath, dbPath, this.currentUpload);
  }
}
