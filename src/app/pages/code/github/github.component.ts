import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';

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

  constructor(private http: Http) { }

  public ngOnInit(): void {
    const url: string = `${environment.api}/github/${environment.npm}/repositories`;
    this.http.get(url).subscribe(
      (res) => {
        this.repositories = res.json();
      }
    );
  }

}
