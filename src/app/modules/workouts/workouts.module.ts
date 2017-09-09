import { ScrollToModule } from 'ng2-scroll-to-el';
import { WorkoutData } from './../../services/workouts-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutesModule } from './workouts.routes.module';

import { WorkoutsComponent } from './workouts.component/workouts.component';
import { CreateWorkoutFormComponent } from './create.workout.form/create.workout.form.component';

import {
  MdChipsModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule,
  MdIconModule, MdGridListModule, MdSelectModule, MdDialogModule, MdMenuModule
} from '@angular/material';
import { MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRoutineFormComponent } from './create.routine.form/create.routine.form.component';
import { CreateExerciseFform } from './create.exercise.form/create.exercise.form.component';
import { ProgramComponent } from './program.component/program.component';
import { CreateProgramComponent } from './create.program.component/create.program.component';
import { AllProgramsComponent } from './all.programs.component/all.programs.component';


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
    MdDialogModule,
    MdMenuModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    WorkoutsComponent,
    CreateWorkoutFormComponent,
    CreateRoutineFormComponent,
    CreateExerciseFform,
    ProgramComponent,
    CreateProgramComponent,
    AllProgramsComponent
],
  entryComponents: [CreateRoutineFormComponent, CreateExerciseFform],
  providers: [
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    WorkoutData,
  ],
})
export class WorkoutsModule { }
