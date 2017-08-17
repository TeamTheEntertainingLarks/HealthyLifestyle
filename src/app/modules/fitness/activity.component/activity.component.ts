import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { DataService } from '../../../services/data.service';
import { Fitness } from '../../../interfaces/fitness';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {
    activity: Fitness;
    paramId: any;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.paramId =  this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.dataService.getActivityById(this.paramId).then((data) => {
            this.activity = data;
        }).catch((err) => console.log(err));
    }
}
