import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityComponent } from './activity.component/activity.component';
import { ActivitiesAllComponent } from './all.activities.component/all.activities.component';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: ActivitiesAllComponent },
    { path: 'create', component: CreateActivityComponent },
    { path: ':id', component: ActivityComponent, data: { type: 'view' } },
    { path: ':id/edit', component: EditActivityComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActivitiesRoutesModule { }
