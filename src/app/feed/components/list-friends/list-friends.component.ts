import { Component, OnInit } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { catchError, map  } from 'rxjs/operators'
import { Friend } from '../../models/friend';
import { ListFeed } from '../../models/list-feed';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.scss']
})
export class ListFriendsComponent implements OnInit {

  public friends: Observable<Friend[]>;
  public feed: Observable<ListFeed[]>;
  public feedByFriend: Observable<ListFeed[]> = new Observable;

  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friends = this.apiService.listFriends().pipe(
      map((item: Friend[]) => {
        return item;
      }),
      catchError( (error: any) => {
        console.log(error);
        return of([]);
      })
    )
  }

  getFeeds() {
    this.feed = this.apiService.listFeeds().pipe(
      map((item: ListFeed[]) => {
        return item;
      }),
      catchError( (error: any) => {
        console.log(error);
        return of([]);
      })
    )
    this.dataService.changeCurrentFeed(this.feed);
  }

  getFeedByFrindsId(id: number) {
    this.feedByFriend = this.apiService.listFeedByFriendsId(id).pipe(
      map((item: ListFeed[]) => {
        return item;
      }),
      catchError( (error: any) => {
        console.log(error);
        return of([]);
      })
    )
    this.dataService.changeCurrentFeed(this.feedByFriend);
  }

}
