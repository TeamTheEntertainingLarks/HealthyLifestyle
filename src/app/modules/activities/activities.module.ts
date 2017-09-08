import { SharedModule } from './../shared/shared.module';
import { GoogleplaceDirective } from './../../directives/googleplace.directive';
import { NotificationService } from './../../services/notification.service';
import { ActivityData } from './../../services/activity-data.service';
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
    MD_PLACEHOLDER_GLOBAL_OPTIONS,
    MD_ERROR_GLOBAL_OPTIONS,
    showOnDirtyErrorStateMatcher,
    MdDialogModule
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
import { AgmCoreModule } from '@agm/core';
import { GoogleMapDialogComponent } from './google-map-dialog/google-map-dialog.component';

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
        MdDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MdSelectModule,
        MdMenuModule,
        MdAutocompleteModule,
        DateTimePickerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDORMqI9tRjPWWOXbJJFkuKgLtnOQrU-ic',
            libraries: ['places'],
        }),
        SharedModule
    ],
    declarations: [
        GoogleplaceDirective,
        ActivityComponent,
        ActivitiesAllComponent,
        CreateActivityComponent,
        EditActivityComponent,
        GoogleMapDialogComponent
    ],
    entryComponents: [
        GoogleMapDialogComponent,
    ],
    providers: [
        { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: showOnDirtyErrorStateMatcher } },
        { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } },
        ActivityData,
        NotificationService],
})

export class ActivitiesModule { }
