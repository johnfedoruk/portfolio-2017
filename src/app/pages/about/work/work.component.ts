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

    private jobs: any[];
    private subscriptions: Subscription[] = [];
    
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getWork().subscribe(
                jobs => this.jobs = jobs.reverse().map(job=>{
                    job.start = new Date(job.start);
                    job.start.setDate(job.start.getDate()+1);
                    if(job.end!==undefined) {
                        job.end = new Date(job.end);
                        job.end.setDate(job.end.getDate()+1);
                    }
                    return job;
                })
            )
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

}
