import { Component, OnInit } from '@angular/core';

const OWNER: string = "John Fedoruk";
const USER: string = "You";

interface Message {
	date: Date;
	message: string;
	sender: string;
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	readonly OWNER: string = OWNER;
	readonly USER: string = USER;

	messages: Message[] = [];

	constructor() { }

	ngOnInit() {
		for (let i = 0; i < 20; i++) {
			this.messages.push(this.randomMessage());
		}
	}

	private randomMessage():Message {
		return {
			date: new Date(),
			message:this.randomText(),
			sender:this.randomSender()
		}
	}

	private randomText():string {
		const LOOPS:number = Math.floor(Math.random()*20 + 1);
		let txt:string = "";
		for(let i=0;i<LOOPS;i++) {
			txt+=Math.random()>0.5?"Hello ":"world ";
		}
		return txt;
	}

	private randomSender(): string {
		return Math.random() > 0.5 ? this.OWNER : USER;
	}

}
