import { Component, OnInit, Input } from '@angular/core';
import "./assets/github_contributions.js";
import { Http } from '@angular/http';

declare const $: any;

@Component({
    selector: 'git-graph',
    templateUrl: './git-graph.component.html',
    styleUrls: [
        './git-graph.component.css'
    ]
})
export class GitGraphComponent implements OnInit {
    public graph: string;
    public contributions: string;
    @Input("proxy")
    public proxy: string = "https://cors.io/?";
    @Input("proxy-options")
    public proxy_options: string = "";
    @Input("username")
    private username: string;

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get(`${this.proxy}https://github.com/users/${this.username}/contributions${this.proxy_options}`).subscribe(
            data => {
                const body: string = (<any>data)._body;
                this.graph = body;
            }
        );
        this.http.get(`${this.proxy}https://github.com/${this.username}${this.proxy_options}`).subscribe(
            data => {
                const body: string = (<any>data)._body;
                const regex = /mb-2\">([\s\S]*?)contributions/im;
                const contributions = body.match(regex)[1].trim();
                this.contributions = contributions;
            }
        )
    }

}


