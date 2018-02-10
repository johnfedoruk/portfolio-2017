import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public phones: string[];
    public emails: string[];
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.profile.getPhones().subscribe(
            phones=>this.phones = phones
        )
        this.profile.getEmails().subscribe(
            emails=>this.emails = emails
        )
    }

}
