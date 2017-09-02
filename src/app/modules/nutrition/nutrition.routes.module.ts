import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritionComponent } from './nutrition/nutrition.component';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: NutritionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NutritionRoutesModule { }
