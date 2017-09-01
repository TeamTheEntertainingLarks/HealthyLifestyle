import { Workout } from './../../../models/workout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  public days: Array<Workout>;
  // TODO make it enum
  public difficulty: string;

  constructor() {
    this.days = new Array<Workout>();
   }

  ngOnInit() {
  }

}
