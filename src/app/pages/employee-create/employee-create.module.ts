import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateComponent } from './employee-create.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeCreateComponent
      }
    ])
  ],
  declarations: [EmployeeCreateComponent]
})
export class EmployeeCreateModule { }
