import { Router, Params, ActivatedRoute } from '@angular/router';
import { WorkoutData } from './../../../services/workouts-data.service';
import { Workout } from './../../../models/workout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  public days: Array<any>;
  public name: string;
  public description: string;

  constructor(
      private router: ActivatedRoute,
      private workoutData: WorkoutData
    ) {
    this.days = new Array<any>();
   }

  ngOnInit() {
    let name: string;
    this.router.params.subscribe((params: Params) => {
      name = params['name'];
    });
    this.workoutData.getProgramByName(name).subscribe(pr => {
      this.days = pr[0].days;
      this.name = pr[0].name;
      this.description = pr[0].description;
    });
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
