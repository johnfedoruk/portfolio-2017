import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class CommitService {

    private cache: { [key: string]: any } = {};
    constructor(private http: Http) { }

    public commitCount(username: string, proxy?: string, proxy_options?: string): Observable<number> {
        return new Observable<number>(
            observer => {
                const url = `${environment.api}/github/${username}/contributions`;
                if (this.cache[url] !== undefined) {
                    observer.next(this.cache[url]);
                    observer.complete();
                } else {
                    this.http.get(url).subscribe(
                        data => {
                            const body: string = (<any>data)._body;
                            const contributions: number = +body;
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
                const url = `${environment.api}/github/${username}/graph`;
                if (this.cache[url] !== undefined) {
                    observer.next(this.cache[url]);
                    observer.complete();
                }
                this.http.get(url).subscribe(
                    data => {
                        const body: string = (<any>data)._body;
                        const regex: RegExp = /<text(.*?)<\/text>/g;
                        const graph: string = body.replace(regex, '');
                        this.cache[url] = graph;
                        observer.next(graph);
                        observer.complete();
                    }
                );
            }
        );
    }

}
