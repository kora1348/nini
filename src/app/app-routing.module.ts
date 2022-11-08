import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineComponent } from './views/online';
import { SigninComponent } from './views/signin/signin.component';



import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: OnlineComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

