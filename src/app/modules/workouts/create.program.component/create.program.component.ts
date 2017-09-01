import { ModelFactory } from './../../../services/factories/model.factory';
import { Routine } from './../../../models/routine';
import { Workout } from './../../../models/workout';
import { WorkoutData } from './../../../services/workouts-data.service';
import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-create-program',
  templateUrl: './create.program.component.html',
  styleUrls: ['./create.program.component.css']
})
export class CreateProgramComponent implements OnInit {
  public name: string;
  public workout: any;
  public days: Array<any>;
  public workouts: Array<any>;
  constructor(
    public workoutData: WorkoutData,
    private factory: ModelFactory,
    public scrollToService: ScrollToService) {
    this.workouts = new Array<any>();
    this.add = false;
    this.days = new Array<any>();
  }

  public add: boolean;

  ngOnInit() {
    this.workoutData.getAvailableWorkouts().subscribe(items => {
        this.workouts = items;
    });
  }

  getAddForm(element) {
    this.add = true;
    setTimeout(() => {
      this.scrollToService.scrollTo(element);
    }, 100);
  }

  addWorkout() {
    let currentWorkout: any;
    this.workoutData.getWorkoutById(this.workout).subscribe(item => {
      currentWorkout = item;
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
    const currentWorkout = this.workoutData.getWorkoutByTitle(workout.title);
    const newDay = {
      workout: currentWorkout,
      checked: false,
    };

    this.days.push(newDay);
    this.add = false;
    //clear form
  }

  checkIfHide(el) {

  }
}
