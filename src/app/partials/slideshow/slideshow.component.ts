import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
    public image: string = "http://lifekefunde.com/wp-content/uploads/2018/02/life.jpg";
    constructor() { }

    ngOnInit() {
    }

}
