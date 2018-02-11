import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {

    private educations: any[];
    private subscriptions: Subscription[] = [];
    
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getEducation().subscribe(
                educations => this.educations = educations.reverse().map(ed=>{
                    ed.start = new Date(ed.start);
                    ed.start.setDate(ed.start.getDate()+1);
                    if(ed.end!==undefined) {
                        ed.end = new Date(ed.end);
                        ed.end.setDate(ed.end.getDate()+1);
                    }
                    return ed;
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
