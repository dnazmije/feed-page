import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ListFriendsComponent } from './components/list-friends/list-friends.component';
import { ListFeedComponent } from './components/list-feed/list-feed.component';



@NgModule({
  declarations: [
    FeedComponent,
    ListFriendsComponent,
    ListFeedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedModule { }
