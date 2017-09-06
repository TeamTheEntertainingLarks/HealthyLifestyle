import { ActivityInterface } from './../../../interfaces/activity';
import { ActivityData } from './../../../services/activity-data.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { WorkoutInterface } from '../../../interfaces/workout';
import { FirebaseListObservable } from 'angularfire2/database';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-activities',
    templateUrl: './all.activities.component.html',
    styleUrls: ['./all.activities.component.css']
})

export class ActivitiesAllComponent implements OnInit {
    public path: string;
    public order: number;
    public activities: FirebaseListObservable<any>;
    public searchWord: string;
    public categoryCtrl: FormControl;
    public filteredCategories: any;

    public categories = [
        'Bicycling',
        'Dancing',
        'Music Playing',
        'Running',
        'Educational',
        'Kids',
        'Water Activities',
        'Winter Activities',
        'Volunteer Activities'];

    constructor(private auth: AuthService, private activitiesDataService: ActivityData) { }

    ngOnInit() {
        this.categoryCtrl = new FormControl();
        this.activities = this.activitiesDataService
            .getAllActivities();

        this.filteredCategories =
            this.categoryCtrl.valueChanges
                .startWith(null)
                .map(name => this.filterStates(name));
    }

    isAuthenticated() {
        return this.auth.isAuthenticated;
    }

    orderBy(prop: string, num: number) {
        this.path = prop;
        this.order = num;
        return false;
    }

    filterStates(val: string) {
        return val ? this.categories
            .filter(s => s.toLowerCase()
                .indexOf(val.toLowerCase()) === 0) : this.categories;
    }
}
