import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule, MdGridListModule, MdChipsModule } from '@angular/material';

import { ActivitiesRoutesModule } from './activities.routes.module';

import { ActivityComponent } from './activity.component/activity.component';
import { ActivitiesAllComponent } from './all.activities.component/all.activities.component';

@NgModule({
    imports: [
        CommonModule,
        ActivitiesRoutesModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdChipsModule
    ],
    declarations: [ActivityComponent, ActivitiesAllComponent],
    providers: [],
    exports: [
        ActivityComponent,
        ActivitiesAllComponent,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdChipsModule
    ]
})

export class ActivitiesModule {}
