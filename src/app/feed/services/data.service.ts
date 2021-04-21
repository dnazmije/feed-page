import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListFeed } from '../models/list-feed';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public sourceFeed = new BehaviorSubject<ListFeed[]>(null);
  public currentFeed = this.sourceFeed.asObservable();

  constructor(
  ) { }

  changeCurrentFeed(feed: any) {
    // change the source feed
    this.sourceFeed.next(feed);
  }
}
