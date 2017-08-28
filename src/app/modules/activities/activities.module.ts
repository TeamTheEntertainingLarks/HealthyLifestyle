import { GooglePlaceModule } from './../../directives/googleplace.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimePickerModule } from 'ng-pick-datetime';

import {
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdIconModule,
    MdGridListModule,
    MdChipsModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule,
    MdAutocompleteModule,
    MD_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';

import { ActivitiesRoutesModule } from './activities.routes.module';

import { ActivityComponent } from './activity.component/activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { ActivitiesAllComponent } from './all.activities.component/all.activities.component';
import { SortPipe } from '../../pipes/sort.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { ZoomImageDirective } from '../../directives/zoom-image.directive';

@NgModule({
    imports: [
        CommonModule,
        ActivitiesRoutesModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdInputModule,
        FormsModule,
        ReactiveFormsModule,
        MdSelectModule,
        MdMenuModule,
        MdAutocompleteModule,
        DateTimePickerModule,
        GooglePlaceModule
    ],
    declarations: [
        ActivityComponent,
        ActivitiesAllComponent,
        CreateActivityComponent,
        EditActivityComponent,
    ],
    providers: [{ provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } }],
})

export class ActivitiesModule { }
