import { ModelFactory } from './../../../services/factories/model.factory';
import { Routine } from './../../../models/routine';
import { Workout } from './../../../models/workout';
import { WorkoutData } from './../../../services/workouts-data.service';
import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router } from '@angular/router';

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
  public workoutTitle: string;

  constructor(
    private router: Router,
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
      items.forEach(item => {
        this.workouts.push(item.val());
      });
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
    this.workoutData.getAvailableWorkouts().subscribe(workouts => {
      workouts.forEach(snapshot => {
        if (snapshot.val().title === this.workoutTitle) {
          currentWorkout = snapshot.val();
        }
      });
    });

    const newDay = {
      workout: currentWorkout,
      checked: false,
    };

    this.days.push(newDay);
    this.add = false;
    //TODO - Clear Select
  }

  addProgram() {
    this.workoutData.addProgram(this.days);
    this.router.navigate(['programs/all']);

  }

  addNewWorkout(workout: any) {
    const currentWorkout = this.workoutData.getAvailableWorkouts().subscribe(workouts => {
      workouts.forEach(snapshot => {
        if (snapshot.val().title === workout.title) {
          workout = snapshot.val();
        }
      });
    });

    console.log(workout);
    const newDay = {
      workout: currentWorkout,
      checked: false,
    };

    this.days.push(newDay);
    this.add = false;
    //clear form
  }
}
