import { ActivatedRoute, Router, Data } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { ActivityInterface } from '../../../interfaces/activity';
import { AuthService } from '../../../services/auth.service';
import { ActivityData } from '../../../services/activity-data.service';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {
    @Input()
    public activity;

    @Input()
    public activityId: string;

    public userId: string;
    public type: string;
    public commentsLength: number;
    public activityLoaded: Promise<boolean>;

    constructor(
        private router: Router,
        private auth: AuthService,
        private route: ActivatedRoute,
        private activitiesDataService: ActivityData) {
    }

    ngOnInit() {
        this.userId = localStorage.getItem('authkey');

        this.route.data
            .subscribe((data) => {
                this.type = data.type;
            });

        this.route.params
            .subscribe(params => {
                if (params.id) {
                    this.activitiesDataService
                        .getActivityById(params.id)
                        .subscribe((activity) => {
                            this.activity = activity;
                            if (activity.comments) {
                                this.commentsLength = this.activity.comments.length;
                            }
                            this.activityLoaded = Promise.resolve(true);
                        });
                }
            });
    }

    isAuthenticated() {
        return this.auth.isAuthenticated;
    }

    isAuthor(authorId: string) {
        if (this.userId === authorId) {
            return true;
        }

        return false;
    }

    isParticipating() {
        if (this.activity.participants) {
            if (this.activity.participants.indexOf(this.userId) === -1) {
                return false;
            }
            return true;
        }
        return false;
    }

    participate() {
        this.activity.participants = this.activity.participants || [];
        this.activity.participants.push(this.userId);
        this.activitiesDataService.editActivity(this.activityId, this.activity);
    }

    leave() {
        const index = this.activity.participants.indexOf(this.userId);
        if (index !== -1) {
            this.activity.participants.splice(index, 1);
            this.activitiesDataService.editActivity(this.activityId, this.activity);
        }
    }

    delete() {
        this.activitiesDataService.delete(this.activityId);
    }
}
