import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  status: boolean = true; 
  constructor(private service: CommunicationService) { }

  onRefresh(): void {
    this.service.getStatus().subscribe( res => {
      this.status = res.isAvailable;
    });
  }

  ngOnInit(): void {
    this.onRefresh();
  }

  ngOnChanges(): void {
    this.onRefresh();
  }

  onClick() :void {
    console.log("clicked")
    this.onRefresh();
  }

  
}
