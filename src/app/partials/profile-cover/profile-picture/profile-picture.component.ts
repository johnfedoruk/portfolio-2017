import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';

@Component({
    selector: 'app-profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

    public profilePhoto: string;
    public profilePhotos: string[];
    constructor(private profile:ProfileService) { }

    ngOnInit() {
        this.profile.getProfilePhotos().subscribe(
            profilePhotos => {
                this.profilePhotos = profilePhotos.reverse();
                this.profilePhoto = this.profilePhotos[0];
            }
        )
    }

}
