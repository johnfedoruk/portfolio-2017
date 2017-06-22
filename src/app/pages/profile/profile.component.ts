import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

declare const $: any;

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

	readonly STICKY:string = "#sidebar";

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		// init sticky kit
		$(this.STICKY).stick_in_parent({
			recalc_every: 100,
			offset_top: 15
		});
	}

	ngOnDestroy() {
		// detach sticky kit
		$(this.STICKY).trigger("sticky_kit:detach");
	}

}
