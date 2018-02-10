import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

    public phones: string[];
    public emails: string[];
    private subscriptions: Subscription[] = [];
    constructor(private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getPhones().subscribe(
                phones => this.phones = phones
            )
        );
        this.subscriptions.push(
            this.profile.getEmails().subscribe(
                emails => this.emails = emails
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

}
