import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public links = [
    {
      img: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png',
      url: `https://github.com/${environment.github}`
    },
    {
      img: 'https://png.icons8.com/color/1600/npm.png',
      url: `https://www.npmjs.com/~${environment.npm}`
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
