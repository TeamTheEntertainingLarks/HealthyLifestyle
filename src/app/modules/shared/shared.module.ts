import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MdIconModule,
        MaterialModule,
    ],
    declarations: [
        NavComponent,
        PageNotFoundComponent,
        FooterComponent
    ],
    exports: [
        NavComponent,
        PageNotFoundComponent,
        FooterComponent
    ]
})
export class SharedModule { }
