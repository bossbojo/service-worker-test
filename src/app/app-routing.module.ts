import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
    data: { animation: 'employee' }
  },
  {
    path: 'employee-create',
    loadChildren: () => import('./pages/employee-create/employee-create.module').then(m => m.EmployeeCreateModule),
    data: { animation: 'employee-create' }
  },
  {
    path: 'employee-edit',
    loadChildren: () => import('./pages/employee-edit/employee-edit.module').then(m => m.EmployeeEditModule)
  },
  {
    path: '**',
    redirectTo: 'employee'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
