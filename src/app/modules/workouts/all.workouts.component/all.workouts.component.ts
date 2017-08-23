import { Component, OnInit } from '@angular/core';

import { WorkoutData } from './../../../services/workouts-data.service';
import { AppComponent } from '../../../app.component';
import { AuthService } from './../../../services/auth.service';
import { ModelFactory } from './../../../services/factories/model.factory';
import { WorkoutInterface } from './../../../interfaces/workout';

@Component({
  selector: 'app-all.workouts',
   providers: [
    WorkoutData
  ],
  templateUrl: './all.workouts.component.html',
  styleUrls: ['./all.workouts.component.css']
})
export class WorkoutsAllComponent implements OnInit {

    public recipe: WorkoutInterface;
    public workouts: Array<WorkoutInterface>;
    private factory: ModelFactory;
    private workoutDataService: WorkoutData;
    auth: AuthService;

    constructor(
        workoutDataService: WorkoutData,
        factory: ModelFactory,
        auth: AuthService) {
        this.factory = factory;
        this.workoutDataService = workoutDataService;
        this.auth = auth;
    }

    ngOnInit() {
      // todo
        this.workoutDataService.getAll().subscribe(items => {
            this.workouts = items;
        });

        return this.workouts;
    }
    isAuthenticated() {
      return this.auth.isAuthenticated;
    }
}
