import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { ZoomImageDirective } from '../directives/zoom-image.directive';
import { GramsPipe } from './grams.pipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SortPipe,
        SearchPipe,
        ZoomImageDirective,
        GramsPipe
],
    exports: [
        SortPipe,
        SearchPipe,
        ZoomImageDirective,
        GramsPipe
    ]
})
export class PipesSharedModule { }
