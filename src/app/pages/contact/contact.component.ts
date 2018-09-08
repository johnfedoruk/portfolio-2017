import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    routes: Array<{ title: string; link: string }> = [
        // {
        //     title: "Message",
        //     link: "message"
        // },
        {
            title: "Email",
            link: "email"
        }
    ];
    ngOnInit() { }

}
