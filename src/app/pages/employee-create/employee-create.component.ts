import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  form: FormGroup;
  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.form = this.builder.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      picture: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  OnSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.http.post(`https://5d0c4c2e9ab9d80014c25ecf.mockapi.io/api/v1/product`, this.form.value)
      .subscribe(() => {

      });
  }
}
