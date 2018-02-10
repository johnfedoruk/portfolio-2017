import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

    public intro: string;
    public github: string;
    public array: string[] = [];

    private subscriptions: Subscription[] = [];

    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getIntro().subscribe(
                intro => this.intro = intro
            )
        );
        this.subscriptions.push(
            this.profile.getGithub().subscribe(
                github => this.github = github
            )
        );
        for (let i = 0; i < 15; i++)
            this.array.push(i % 2 == 0 ? "Hello World Hello World Hello World Hello World" : "World");
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

}
