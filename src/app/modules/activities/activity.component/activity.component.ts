import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

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
    activity: ActivityInterface;

    @Input()
    activityId: string;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private activitiesDataService: ActivityData) {

    }

    ngOnInit() {

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

    delete() {
        this.activitiesDataService.delete(this.activityId);
    }
}
