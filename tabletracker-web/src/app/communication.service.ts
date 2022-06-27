import { destroyPlatform, Injectable } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  subscription: Subscription;
  constructor(private http: HttpClient) { }

  // HTTP session variables
  private _url = 'https://localhost:7216/get';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  ngOnInit(): void {
  }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this._url, this.httpOptions);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
}
}
