import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chat-box',
	templateUrl: './chat-box.component.html',
	styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

	public online:boolean = Math.random()>0.5?true:false;

	constructor() { }

	ngOnInit() {
	}

}
