import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  status: boolean = true; 
  subscription: Subscription;

  constructor(private service: CommunicationService) { }

  onRefresh(): void {
    this.service.getStatus().subscribe( res => {
      this.status = res.isAvailable;
    });
  }

  ngOnInit(): void {
    this.onRefresh();

    const source = interval(5*1000);
    this.subscription = source.subscribe(val => this.onRefresh());
  }

  ngOnChanges(): void {
    this.onRefresh();
  }

  onClick() :void {
    this.onRefresh();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
