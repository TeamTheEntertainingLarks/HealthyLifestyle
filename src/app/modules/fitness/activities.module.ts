import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule, MdGridListModule } from '@angular/material';

import { AppRoutesModule } from './../../routes.module';

import { ActivityComponent } from './activity.component/activity.component';
import { ActivitiesAllComponent } from './all.activities.component/all.activities.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutesModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule
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
        MdGridListModule
    ]
})

export class ActivitiesModule {}
