import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import "./assets/github_contributions.js";
import { Http } from '@angular/http';
import { CommitService } from './services/commit.service';
import { Subscription } from 'rxjs/Subscription';

declare const $: any;

@Component({
    selector: 'git-graph',
    templateUrl: './git-graph.component.html',
    styleUrls: [
        './git-graph.component.css'
    ]
})
export class GitGraphComponent implements OnInit, OnDestroy {
    public _username: string;
    public graph: string;
    public contributions: number;
    @Input("proxy")
    public proxy: string = "http://localhost:9090/";
    @Input("proxy-options")
    public proxy_options: string = "";

    private subscriptions: Subscription[] = [];

    constructor(private commits: CommitService) { }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        )
    }

    @Input("username")
    public set username(username: string) {
        this._username = username;
        if(username!==undefined && username !== null) {
            this.subscriptions.push(
                this.commits.commitCount(username,this.proxy,this.proxy_options).subscribe(
                    commits => this.contributions = commits
                )
            );
            this.subscriptions.push(
                this.commits.commitGraph(username,this.proxy,this.proxy_options).subscribe(
                    graph => this.graph = graph
                )
            );
        }
    }

}


