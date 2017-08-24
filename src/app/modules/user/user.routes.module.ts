import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInFormComponent } from './signIn-form/signIn-form.component';
import { SignUpFormComponent } from './signUp-form/signUp-form.component';


const routes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInFormComponent },
    { path: 'sign-up', component: SignUpFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutesModule { }
