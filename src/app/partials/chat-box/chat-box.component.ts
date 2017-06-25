import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chat-box',
	templateUrl: './chat-box.component.html',
	styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

	public online:boolean = Math.random()>0.5?true:false;

	public chatBoxOpen:boolean = false;

	constructor() { }

	ngOnInit() {
	}

	public onOpenChatBox() {
		this.chatBoxOpen = true;
	}

	public onCloseChatBox() {
		this.chatBoxOpen = false;
	}

}
