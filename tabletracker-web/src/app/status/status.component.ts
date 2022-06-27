import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: boolean = true; 
  constructor(private service: CommunicationService) { }

  ngOnInit(): void {
    this.service.serve()
  }

}
