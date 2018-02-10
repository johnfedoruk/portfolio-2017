import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-cover-photo',
    templateUrl: './cover-photo.component.html',
    styleUrls: ['./cover-photo.component.css']
})
export class CoverPhotoComponent implements OnInit, OnDestroy {

    public name: string;
    public coverPhoto: string;
    public coverPhotos: string[];
    private subscriptions: Subscription[] = [];

    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getName().subscribe(
                name => this.name = name
            )
        );
        this.subscriptions.push(
            this.profile.getCoverPhotos().subscribe(
                coverPhotos => {
                    this.coverPhotos = coverPhotos.reverse();
                    this.coverPhoto = this.coverPhotos[0];
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