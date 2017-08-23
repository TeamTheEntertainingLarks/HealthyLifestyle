import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutesModule } from './workouts.routes.module';

import { WorkoutsComponent } from './workouts.component/workouts.component';
import { WorkoutsAllComponent } from './all.workouts.component/all.workouts.component';

import { MdChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    WorkoutsRoutesModule,
    MdChipsModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutsAllComponent,
  ],
  exports: [
    MdChipsModule,
    WorkoutsRoutesModule,
  ]
})
export class WorkoutsModule { }