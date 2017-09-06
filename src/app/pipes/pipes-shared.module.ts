import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { ZoomImageDirective } from '../directives/zoom-image.directive';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SortPipe,
        SearchPipe,
        ZoomImageDirective,
    ],
    exports: [
        SortPipe,
        SearchPipe,
        ZoomImageDirective,
    ]
})
export class PipesSharedModule { }
