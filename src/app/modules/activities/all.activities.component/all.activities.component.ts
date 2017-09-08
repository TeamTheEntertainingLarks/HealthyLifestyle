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
    public activities;
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

    public locationMarkers = [];

    constructor(private auth: AuthService, private activitiesDataService: ActivityData) { }

    ngOnInit() {
        this.categoryCtrl = new FormControl();

        this.activitiesDataService.getAllActivities()
            .subscribe(items => {
                this.activities = items;
                items.map(item => {
                    const activityId = item.$key;
                    const location = item.location;
                    const activityTitle = item.title;
                    const imageUrl = item.image.url;
                    this.getActivitiesCoordinates(location, activityId, activityTitle, imageUrl);
                });
            });

        this.filteredCategories =
            this.categoryCtrl.valueChanges
                .startWith(null)
                .map(name => this.filterStates(name));
    }

    getActivitiesCoordinates(location, activityId, title, imageUrl) {
        const marker = {
            id: activityId,
            title: title,
            imageUrl: imageUrl,
            lat: location.lat,
            lng: location.lng,
            openInfoWindow: true,
            markerClickable: true
        };
        this.locationMarkers.push(marker);
    }

    test(event) {
        console.log(event);
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
