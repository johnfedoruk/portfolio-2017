import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommitService } from 'app/modules/git-graph/services/commit.service';
import { Subscription } from 'rxjs/Subscription';
import { ProfileService } from 'app/services/profile.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

    public commit_count: string;
    public emails: string[];
    public phones: string[];
    public github: string;
    public location;
    private subscriptions: Subscription[] = [];
    constructor(private commits: CommitService, private profile: ProfileService) { }

    ngOnInit() {
        this.subscriptions.push(
            this.profile.getGithub().subscribe(
                github => {
                    this.github = github;
                    this.subscriptions.push(
                        this.commits.commitCount(this.github, "http://localhost:9090/").subscribe(
                            commits => this.commit_count = commits
                        )
                    );
                }
            )
        );
        this.subscriptions.push(
            this.profile.getEmails().subscribe(
                emails => this.emails = emails
            )
        );
        this.subscriptions.push(
            this.profile.getPhones().subscribe(
                phones => this.phones = phones
            )
        );
        this.subscriptions.push(
            this.profile.getLocations().subscribe(
                locations => this.location = locations.find(
                    location => location.end === undefined
                )
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        );
    }

}
