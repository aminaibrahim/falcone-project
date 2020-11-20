import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
 
  {
    path:'results',
    component: ResultComponent
  },
  {
    path:'**',
    component:DashboardComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
