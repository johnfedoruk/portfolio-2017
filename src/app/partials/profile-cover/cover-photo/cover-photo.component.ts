import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';

@Component({
    selector: 'app-cover-photo',
    templateUrl: './cover-photo.component.html',
    styleUrls: ['./cover-photo.component.css']
})
export class CoverPhotoComponent implements OnInit {

    public name: string;
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.profile.getName().subscribe(
            name => this.name = name
        )
    }

}
