import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { ActivityInterface } from '../../../interfaces/activity';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {
    activity: ActivityInterface;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
}
