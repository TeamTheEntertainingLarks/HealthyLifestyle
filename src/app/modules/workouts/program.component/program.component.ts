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
  // TODO make it enum
  public difficulty: string;

  constructor(
      private router: ActivatedRoute,
      private workoutData: WorkoutData
    ) {
    this.days = new Array<any>();
   }

  ngOnInit() {
    let id: string;
    this.router.params.subscribe((params: Params) => {
      id = params['id'];
    });
    this.workoutData.getProgramById(id).subscribe(pr => {
      this.days = pr;
    });
    setTimeout(() => {
      console.log(this.days);
    }, 4000);
  }




}
