import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent implements OnInit {

  routes: Array<{title: string; link: string}> = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Code',
      link: '/code'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
