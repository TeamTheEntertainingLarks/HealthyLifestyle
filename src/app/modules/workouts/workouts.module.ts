import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutesModule } from './workouts.routes.module';

import { WorkoutsComponent } from './workouts.component/workouts.component';
import { WorkoutsAllComponent } from './all.workouts.component/all.workouts.component';

@NgModule({
  imports: [
    CommonModule,
    WorkoutsRoutesModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutsAllComponent,
]
})
export class WorkoutsModule { }