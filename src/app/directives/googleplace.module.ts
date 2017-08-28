import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { GoogleplaceDirective } from './googleplace.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule],
    declarations: [GoogleplaceDirective],
    exports: [GoogleplaceDirective],
    providers: []
})

export class GooglePlaceModule {

}

