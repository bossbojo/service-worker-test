import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  items: { id: string, name: string, title: string, picture: string }[] = [];
  itemsShow: { id: string, name: string, title: string, picture: string }[] = [];
  placeholders = [];
  loading = false;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get(`https://5d0c4c2e9ab9d80014c25ecf.mockapi.io/api/v1/product`)
      .subscribe((c: { id: string, name: string, title: string, picture: string }[]) => {
        this.items = c.sort((a, b) => (+a.id < +b.id) ? 1 : -1);
        this.itemsShow.push(...this.items);
        this.loading = false;
      });
  }

  loadNext() {
    // if (this.loading) { return; }
    // this.loading = true;
    // this.placeholders = new Array(this.items.length);
    // setTimeout(() => {
    //   this.placeholders = [];
    //   this.itemsShow.push(...this.items);
    //   this.loading = false;
    // }, 1000);
  }
}
