import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

    public projects: any[];
    private subscriptions: Subscription[] = [];
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getProjects().subscribe(
                projects => this.projects = projects.reverse()
            )
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        );
    }

}
