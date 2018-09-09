import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  routes: Array<{ title: string; link: string }> = [
    {
      title: 'GitHub',
      link: 'github',
    },
    {
      title: 'NPM',
      link: 'npm',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
