import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppRoutesModule } from './../../routes.module';

import { ActivityComponent } from './activity.component/activity.component';
import { ActivitiesAllComponent } from './all.activities.component/all.activities.component';

@NgModule({
    imports: [CommonModule, AppRoutesModule, MdButtonModule, MdCheckboxModule],
    declarations: [ActivityComponent, ActivitiesAllComponent],
    providers: [],
    exports: [ActivityComponent, ActivitiesAllComponent, MdButtonModule, MdCheckboxModule]
})

export class ActivitiesModule {}
