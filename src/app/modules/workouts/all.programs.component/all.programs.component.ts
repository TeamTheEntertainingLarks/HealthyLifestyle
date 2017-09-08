import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../../../services/auth.service';
import { ModelFactory } from './../../../services/factories/model.factory';
import { WorkoutData } from './../../../services/workouts-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all.programs',
  templateUrl: './all.programs.component.html',
  styleUrls: ['./all.programs.component.css']
})
export class AllProgramsComponent implements OnInit {

    public programs: Array<any>;
    public path: string;
    public order: number; // 1 asc, -1 desc;


  constructor(
        private workoutDataService: WorkoutData,
        private factory: ModelFactory,
        private auth: AuthService) {
          this.programs = new Array<any>();
        }

  ngOnInit() {
    this.workoutDataService.getAvailablePrograms().subscribe(pr => {
      this.programs = new Array<any>();
      pr.forEach(p => {
        if (typeof p.image !== 'undefined') {
          this.programs.push(p);
        }
      });
    });
  }

    orderBy(prop: string, num: number) {
        this.path = prop;
        this.order = num;
        return false; // do not reload
    }
    isAuthenticated() {
      return this.auth.isAuthenticated;
    }
}
