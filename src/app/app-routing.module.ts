import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './views/identity/views/signin/signin.component';
import { OnlineComponent } from './views/online';




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

