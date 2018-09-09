import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { SlideshowService } from 'app/services/slideshow.service';
import { Photo } from '../../../models/common/photo';

@Component({
    selector: 'app-cover-photo',
    templateUrl: './cover-photo.component.html',
    styleUrls: ['./cover-photo.component.css']
})
export class CoverPhotoComponent implements OnInit, OnDestroy {

    public name: string;
    public coverPhoto: Photo;
    public coverPhotos: Photo[];
    private subscriptions: Subscription[] = [];

    constructor(private profile: ProfileService, private slideshow: SlideshowService) { }

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

    public onOpenSlideshow(): void {
        this.slideshow.addImages(this.coverPhotos);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

}
