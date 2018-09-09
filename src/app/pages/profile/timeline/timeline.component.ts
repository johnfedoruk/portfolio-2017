import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  array: string[] = [];

  constructor() { }

  ngOnInit() {
    for(let i=0;i<40;i++)
      this.array.push(i%2==0?"Hello":"World");
  }

}
