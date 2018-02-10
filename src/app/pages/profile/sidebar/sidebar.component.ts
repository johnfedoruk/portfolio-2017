import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    public intro: string;
    array: string[] = [];

    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.profile.getIntro().subscribe(
            intro => this.intro = intro
        )
        for (let i = 0; i < 15; i++)
            this.array.push(i % 2 == 0 ? "Hello World Hello World Hello World Hello World" : "World");
    }

}
