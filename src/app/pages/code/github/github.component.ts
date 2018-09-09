import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

declare const colorTag: any;

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public link = {
    img: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png',
    url: `https://github.com/${environment.github}`
  };

  public repositories: any[];

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    const url = `${environment.api}/github/${environment.npm}/repositories`;
    this.http.get(url).subscribe(
      (repositories: any[]) => {
        this.repositories = repositories;
      }
    );
  }

  public colorTag(lang: string): string {
    if (!lang) {
      return undefined;
    }
    try {
      return `#${colorTag(lang).hex()}`;
    } catch (e) {
      return undefined;
    }
  }

}
