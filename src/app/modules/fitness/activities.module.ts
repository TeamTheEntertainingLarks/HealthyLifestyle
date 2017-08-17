import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from './../../routes.module';

import { ActivityComponent } from './activity.component/activity.component';
import { ActivitiesAllComponent } from './all.activities.component/all.activities.component';

@NgModule({
    imports: [CommonModule, AppRoutesModule],
    declarations: [ActivityComponent, ActivitiesAllComponent],
    providers: [],
    exports: [ActivityComponent, ActivitiesAllComponent]
})

export class ActivitiesModule {}
