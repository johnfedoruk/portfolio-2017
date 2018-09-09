import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailService } from '../../../services/mail.service';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

    public sent = false;
    public disabled = false;
    public from: string;
    public subject: string;
    public body: string;

    constructor(private mail_service: MailService) { }

    ngOnInit() {
    }

    public async onSubmit(form: NgForm): Promise<void> {
        if (!form.valid || this.disabled || this.sent) {
            return;
        }
        const from: string = this.from;
        const subject: string = this.subject;
        const body: string = this.body;
        const email = {
            from, subject, body,
        };
        try {
            this.disabled = true;
            await this.mail_service.sendContactEmail(email);
            this.sent = true;
        } catch (e) {
            console.error(e);
            this.disabled = false;
        }
    }
}
