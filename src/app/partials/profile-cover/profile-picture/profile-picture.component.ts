import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit, OnDestroy {

    public profilePhoto: string;
    public profilePhotos: string[];
    private subscriptions: Subscription[] = [];
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getProfilePhotos().subscribe(
                profilePhotos => {
                    this.profilePhotos = profilePhotos.reverse();
                    this.profilePhoto = this.profilePhotos[0];
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

}
