import { Component, OnInit } from '@angular/core';
import "./assets/github_contributions.js";

declare const $: any;

@Component({
	selector: 'git-graph',
	templateUrl: './git-graph.component.html',
	styleUrls: [
		'./git-graph.component.css'
	]
})
export class GitGraphComponent implements OnInit {

	contributions:number;

	constructor() { }

	ngOnInit() {
		$('#git_graph').github_graph({
			//Default is empty list
			data: this.getRandomTimeStamps(500,1000),
			// single text and plural text
			texts: ['git contribution', 'git contributions']
		});
	}

	getRandomTimeStamps(min: number, max: number) {
		let return_list = [];

		let entries: number = this.randomInt(min, max);
		this.contributions = entries;
		for (let i: number = 0; i < entries; i++) {
			let day: Date = new Date();

			//Genrate random
			let previous_date: number = this.randomInt(0, 365);
			day.setDate(day.getDate() - previous_date);

			return_list.push(day.getTime());
		}

		return return_list;

	}

	randomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

}


