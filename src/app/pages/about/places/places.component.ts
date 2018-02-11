import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommitService } from 'app/modules/git-graph/services/commit.service';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

    public locations: any[];
    private subscriptions: Subscription[] = [];
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getLocations().subscribe(
                locations => this.locations = locations.reverse().map(location=>{
                    location.start = new Date(location.start);
                    location.start.setDate(location.start.getDate()+1);
                    if(location.end!==undefined) {
                        location.end = new Date(location.end);
                        location.end.setDate(location.end.getDate()+1);
                    }
                    return location;
                })
            )
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        );
    }

}
