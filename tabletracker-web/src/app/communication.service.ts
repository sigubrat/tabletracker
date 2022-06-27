import { destroyPlatform, Injectable } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
  }

  serve(): void {
    // Every 2 seconds
    this.subscription = interval(2*1000)
      .subscribe(() => {
        console.log("Test")
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
}
}
