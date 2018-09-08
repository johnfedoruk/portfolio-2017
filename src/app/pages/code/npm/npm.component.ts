import { Component, OnInit } from '@angular/core';
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

  constructor(private http: Http) { }

  public ngOnInit(): void {
    const url: string = `${environment.api}/npm/${environment.npm}/packages`;
    this.http.get(url).subscribe(
      (res) => {
        this.packages = res.json();
      }
    );
  }

}
