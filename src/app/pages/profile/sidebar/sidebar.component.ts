import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	array:string[] = [];

	constructor() { }

	ngOnInit() {
		for (let i = 0; i < 15; i++)
			this.array.push(i % 2 == 0 ? "Hello World Hello World Hello World Hello World" : "World");
	}

}
