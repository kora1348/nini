import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineComponent } from './online.component';


const ONLINE_ROUTES: Routes = [
  {
    path: '',
    component: OnlineComponent,
    children: [
      {
        path: 'administration',
        loadChildren: () => import('./views/administration/administration.module').then((m) => m.AdministrationModule),
      },
  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(ONLINE_ROUTES)],
  exports: [RouterModule],
})
export class OnlineRoutingModule {}

