import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

	routes: Array<{ title: string; link: string }> = [
		{
			title:"Atmega169 Preemptive OS",
			link:"atmega169-preemptive-os"
		},
		{
			title:"CTR DRBG",
			link:"ctr-drbg"
		},
		{
			title:"AES 128 bit",
			link:"aes-128-bit"
		},
		{
			title:"Parallel Merge Sort",
			link:"parallel-merge-sort"
		},
		{
			title: "Merge Sort",
			link: "merge-sort"
		},
		{
			title: "Quick Sort",
			link: "quick-sort"
		},
		{
			title: "Radix Sort",
			link: "radix-sort"
		},
		{
			title: "Heap Sort",
			link: "heap-sort"
		},
		{
			title: "Binary Search Tree",
			link: "binary-search-tree"
		},
		{
			title: "Hash Table",
			link: "hash-table"
		},
		{
			title:"Graphs",
			link:"graphs"
		},
		{
			title:"Weighted Graphs",
			link:"weighted-graphs"
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
