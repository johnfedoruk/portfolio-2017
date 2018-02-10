import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommitService {

    private cache: { [key: string]: string } = {};
    constructor(private http: Http) { }

    public commitCount(username: string, proxy?: string, proxy_options?: string): Observable<string> {
        return new Observable<string>(
            observer => {
                const url: string = `${proxy ? proxy : "https://"}github.com/${username}${proxy_options ? proxy_options : ""}`;
                if(this.cache[url]!==undefined) {
                    observer.next(this.cache[url]);
                    observer.complete();
                }
                else {
                    this.http.get(url).subscribe(
                        data => {
                            const body: string = (<any>data)._body;
                            const regex = /mb-2\">([\s\S]*?)contributions/im;
                            const contributions = body.match(regex)[1].trim();
                            this.cache[url] = contributions;
                            observer.next(contributions);
                            observer.complete();
                        }
                    )
                }
            }
        )
    }

    public commitGraph(username: string, proxy?: string, proxy_options?: string): Observable<string> {
        return new Observable<string>(
            observer => {
                const url: string = `${proxy ? proxy : "https://"}github.com/users/${username}/contributions${proxy_options ? proxy_options : ""}`;
                if(this.cache[url]!==undefined) {
                    observer.next(this.cache[url]);
                    observer.complete();
                }
                this.http.get(url).subscribe(
                    data => {
                        const body: string = (<any>data)._body;
                        const graph: string = body;
                        this.cache[url] = graph;
                        observer.next(graph);
                        observer.complete();
                    }
                );
            }
        );
    }

}
