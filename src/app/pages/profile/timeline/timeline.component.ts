import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public posts: any[];

  constructor(private timeline_service: TimelineService) { }

  ngOnInit() {
    // for (let i = 0; i < 40; i++) {
    //   this.array.push(i % 2 === 0 ? 'Hello' : 'World');
    // }
    this.timeline_service.posts().subscribe(
      (posts) => {
        console.log(posts);
        this.posts = posts;
      }
    );
  }

}
