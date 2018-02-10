import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommitService {

    constructor(private http: Http) { }

    public commitCount(username: string, proxy?: string, proxy_options?: string): Observable<string> {
        return new Observable<string>(
            observer => {
                this.http.get(`${proxy?proxy:"https://"}github.com/${username}${proxy_options?proxy_options:""}`).subscribe(
                    data => {
                        const body: string = (<any>data)._body;
                        const regex = /mb-2\">([\s\S]*?)contributions/im;
                        const contributions = body.match(regex)[1].trim();
                        observer.next(contributions);
                    }
                )
            }
        )
    }
}
