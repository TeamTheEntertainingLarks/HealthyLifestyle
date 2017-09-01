import { WorkoutData } from './../../../services/workouts-data.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  //-KskBQbpvr9rqJDcwtMC
  public workout: any;

  constructor(
  public workoutData: WorkoutData,
  public router: ActivatedRoute) { }
  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const id = params['id'];
      this.workoutData.getWorkoutById(id).subscribe(item => {
      console.log(item);
        
        this.workout = item;
      });
    });
  }
}
