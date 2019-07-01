import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { NbListModule, NbUserModule, NbSpinnerModule, NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbListModule,
    NbUserModule,
    NbSpinnerModule,
    NbCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeComponent
      }
    ])
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
