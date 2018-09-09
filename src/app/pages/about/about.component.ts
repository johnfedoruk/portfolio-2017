import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  routes:Array<{title:string;link:string}> = [
    {
      title:"Overview",
      link:"overview"
    },
    {
      title:"Work",
      link:"work"
    },
    {
      title:"Education",
      link:"education"
    },
    {
      title:"Projects",
      link:"projects"
    },
    {
      title:"Places",
      link:"places"
    },
    {
      title:"Contact",
      link:"contact"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
