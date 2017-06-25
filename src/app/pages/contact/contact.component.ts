import { Component, OnInit, ViewChild } from '@angular/core';

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

	@ViewChild('messageContainer')
	private messageContainer: any;

	readonly OWNER: string = OWNER;
	readonly USER: string = USER;

	public input:string;
	public messages: Message[] = [];

	constructor() { }

	ngOnInit() {
		for (let i = 0; i < 20; i++) {
			this.onNewMessage(this.randomMessage());
		}
	}

	public onSendMessage(e:Event):boolean {
		if(e)
			e.preventDefault();
		if(!this.input||this.input.length<1)
			return false;
		this.onNewMessage({
			date: new Date(),
			message:this.input,
			sender:USER
		});
		this.input = "";
		// send a dummy response by OWNER
		setTimeout(()=>{
			this.onNewMessage(this.randomMessage(OWNER));
		},Math.floor(Math.random()*5000));
		return false;
	}

	private randomMessage(sender:string=this.randomSender()):Message {
		return {
			date: new Date(),
			message:this.randomText(),
			sender:sender
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

	private onNewMessage(message:Message):void {
		this.messages.push(message);
		this.scrollToBottom();
	}

	private randomSender(): string {
		return Math.random() > 0.5 ? this.OWNER : USER;
	}

	private scrollToBottom(): void {
        try {
			setTimeout(()=>{
	            this.messageContainer.elementRef.nativeElement.scrollTop = this.messageContainer.elementRef.nativeElement.scrollHeight;
			},100);
        } catch(err) { }                 
    }

}
