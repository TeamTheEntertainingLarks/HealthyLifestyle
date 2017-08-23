import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutsComponent } from './workouts.component/workouts.component';
import { WorkoutsAllComponent } from './all.workouts.component/all.workouts.component';
import { CreateWorkoutFormComponent } from './create.workout.form/create.workout.form.component';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: WorkoutsAllComponent },
    { path: 'create', component: CreateWorkoutFormComponent },
    { path: ':id', component: WorkoutsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WorkoutsRoutesModule { }