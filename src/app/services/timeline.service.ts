import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { filter, first } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable()
export class TimelineService {

  private posts$: Subject<any> = new BehaviorSubject<any>(undefined);
  constructor(private http: HttpClient) {
    this.load();
  }

  private async load(): Promise<void> {
    const url: string = this.url;
    const tweets = await this.http.get(url).toPromise();
    this.posts$.next(tweets);
  }

  public posts(): Observable<any[]> {
    return this.posts$.pipe(filter((v) => v !== undefined), first());
  }

  private get url(): string {
    const url = `${environment.api}/twitter/${environment.username}/tweets`;
    return url;
  }
}
