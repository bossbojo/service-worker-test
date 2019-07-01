import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEditComponent } from './employee-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeEditComponent
      }
    ])
  ],
  declarations: [EmployeeEditComponent]
})
export class EmployeeEditModule { }
