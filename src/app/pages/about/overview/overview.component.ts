import { Component, OnInit } from '@angular/core';
import { CommitService } from 'app/modules/git-graph/services/commit.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

    public commit_count: string;
    public github: string = "johnfedoruk";
    constructor(private commits: CommitService) { }

    ngOnInit() {
        this.commits.commitCount(this.github, "http://localhost:9090/").subscribe(
            commits => this.commit_count = commits
        )
    }

}
