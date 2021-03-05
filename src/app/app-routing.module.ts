import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CConstructionComponent } from './components/c-construction/c-construction.component';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { PIndexComponent } from './pages/p-index/p-index.component';


const routes: Routes = [
{ path: '' , component:PIndexComponent},
{ path: 'dashboard' , component:PDashboardComponent },
{ path: 'construction' , component: CConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
