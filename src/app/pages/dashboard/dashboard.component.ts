import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  stats = [
    { title: 'Users', value: 1200, icon: 'bi-person' },
    { title: 'Orders', value: 876, icon: 'bi-cart' },
    { title: 'Revenue', value: '$12,400', icon: 'bi-currency-dollar' }
  ];

  users: any[] = [];

  constructor(private http: HttpClient) {}


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['January', 'February', 'March', 'April'];
  barChartData = [
    { data: [1200, 900, 1400, 1100], label: 'Revenue' }
  ];
  barChartType: ChartType = 'bar';
  
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => this.users = data);
  }
}
