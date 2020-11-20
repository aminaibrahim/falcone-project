import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResultComponent } from './components/result/result.component';
import { SelectionComponent } from './components/selection/selection.component';

const routes: Routes = [
 
  {
    path:'results',
    component: ResultComponent
  },
  {
    path:'**',
    component:SelectionComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
