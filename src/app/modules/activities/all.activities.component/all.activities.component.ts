import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { WorkoutInterface } from '../../../interfaces/workout';

@Component({
    selector: 'app-activities',
    templateUrl: './all.activities.component.html',
    styleUrls: ['./all.activities.component.css']
})

export class ActivitiesAllComponent implements OnInit {
    public path: string;
    public order: number;

    constructor(private auth: AuthService) { }

    ngOnInit() {

    }

    orderBy(prop: string, num: number) {
        this.path = prop;
        this.order = num;
        return false;
    }

    isAuthenticated() {
        return this.auth.isAuthenticated;
    }
}
