import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {

    public educations: any[];
    private subscriptions: Subscription[] = [];
    
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getEducation().subscribe(
                educations => this.educations = educations.reverse()
            )
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }
}
