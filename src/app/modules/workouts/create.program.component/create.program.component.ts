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
  public workout: Workout;
  public days: Array<Workout>;
  public workouts: Array<Workout>;
  constructor(
    public workoutData: WorkoutData,
    public scrollToService: ScrollToService) {
    this.days = new Array<Workout>();
    this.workouts = new Array<Workout>();
    this.add = false;
  }

  public add: boolean;

  ngOnInit() {
    this.workoutData.getAvailableWorkouts().subscribe(items => {
      this.workouts = new Array<Workout>();
      items.forEach(item => {
        const newWorkout = new Workout(item.title, item.author, item.createdOn,
           item.category, item.Routines, item.description, item.comments);
        this.workouts.push(newWorkout);
      });
    });
  }

  addDay(element) {
    this.add = true;
    setTimeout(() => {
      this.scrollToService.scrollTo(element);
    }, 100);
  }

}
