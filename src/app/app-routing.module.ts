import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineComponent } from './views/online';
import { LoginComponent } from './views/login';


import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: OnlineComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

