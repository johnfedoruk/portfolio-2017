import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.css']
})
export class NpmComponent implements OnInit {

  public link = {
    img: 'https://png.icons8.com/color/1600/npm.png',
    url: `https://www.npmjs.com/~${environment.npm}`
  };

  public packages: any[];

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    const url = `${environment.api}/npm/${environment.npm}/packages`;
    this.http.get(url).subscribe(
      (packages: any[]) => {
        this.packages = packages;
      }
    );
  }

}
