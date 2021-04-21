import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListFeed } from '../../models/list-feed';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-feed',
  templateUrl: './list-feed.component.html',
  styleUrls: ['./list-feed.component.scss']
})
export class ListFeedComponent implements OnInit {

  public feedToDisplay: Observable<ListFeed[]>;

  constructor(
    public dataService: DataService
  ) {

  }

  ngOnInit(): void {
    // get the current feed from the service
    this.dataService.currentFeed.subscribe((data: any) => {
      this.feedToDisplay = data;
    })
  }

}
