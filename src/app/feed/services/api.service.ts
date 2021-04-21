import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListFeed } from '../models/list-feed';
import { Friend } from '../models/friend';

const ENV = ` http://localhost:5000`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // mocked token
  private token: string = `1234567890`;

  constructor(
    private http: HttpClient,
  ) { }

  listFriends(): Observable<Friend[]> {
    const params = new HttpParams()
      .set('t', this.token);
    return this.http.get<Friend[]>(`${ENV}/friends`, { params });
  }

  listFeeds(): Observable<ListFeed[]> {
    const params = new HttpParams()
      .set('t', this.token);
    return this.http.get<ListFeed[]>(`${ENV}/list-feed`, { params });
  }

  listFeedByFriendsId(id: number): Observable<ListFeed[]> {
    const friendsId = id.toString();
    const params = new HttpParams()
      .set('friends-id', friendsId)
      .set('t', this.token);

    return this.http.get<ListFeed[]>(`${ENV}/list-feed`, { params });
  }

}
