import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProfileService } from 'app/services/profile.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {

    public jobs: any[];
    private subscriptions: Subscription[] = [];

    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getWork().subscribe(
                jobs => this.jobs = jobs.reverse()
            )
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

}
