import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutesModule } from './workouts.routes.module';

import { WorkoutsComponent } from './workouts.component/workouts.component';
import { WorkoutsAllComponent } from './all.workouts.component/all.workouts.component';
import { CreateWorkoutFormComponent } from './create.workout.form/create.workout.form.component';

import {
  MdChipsModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule,
  MdIconModule, MdGridListModule, MdSelectModule
} from '@angular/material';
import { MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoutineFormComponent } from './create.routine.form/create.routine.form.component';

@NgModule({
  imports: [
    CommonModule,
    WorkoutsRoutesModule,
    MdChipsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdGridListModule,
    MdSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutsAllComponent,
    CreateWorkoutFormComponent,
    CreateRoutineFormComponent,
  ],
  providers: [
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } },
  ],
})
export class WorkoutsModule { }
