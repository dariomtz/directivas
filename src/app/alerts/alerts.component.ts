import { Component, Directive, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alerts = [
    {
      alert: 'primary',
      count: 0,
    },
    {
      alert: 'secondary',
      count: 0,
    },
    {
      alert: 'success',
      count: 0,
    },
    {
      alert: 'danger',
      count: 0,
    },
    {
      alert: 'warning',
      count: 0,
    },
    {
      alert: 'info',
      count: 0,
    },
    {
      alert: 'light',
      count: 0,
      color: 'black',
    },
    {
      alert: 'dark',
      count: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  add(index: number): void{
    this.alerts[index].count++;
  }

}

