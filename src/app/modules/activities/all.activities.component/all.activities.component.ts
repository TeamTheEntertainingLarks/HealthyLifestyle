import { ActivityInterface } from './../../../interfaces/activity';
import { ActivityData } from './../../../services/activity-data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { WorkoutInterface } from '../../../interfaces/workout';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-activities',
    templateUrl: './all.activities.component.html',
    styleUrls: ['./all.activities.component.css']
})

export class ActivitiesAllComponent implements OnInit {
    public path: string;
    public order: number;
    public activities: FirebaseListObservable<any>;

    constructor(private auth: AuthService, private activitiesDataService: ActivityData) { }

    ngOnInit() {
        this.activities = this.activitiesDataService
            .getAllActivities();
    }

    orderBy(prop: string, num: number) {
        this.path = prop;
        this.order = num;
        return false;
    }

    isAuthenticated() {
        return this.auth.isAuthenticated;
    }

    isAuthor(authorId: string) {
        if (this.auth.currentUserId === authorId) {
            return true;
        }

        return false;
    }
}
