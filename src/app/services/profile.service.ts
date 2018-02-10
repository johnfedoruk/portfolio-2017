import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ProfileService {

    private loaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private profile: any;

    constructor(private http: Http) {
        this.http.get("https://tech-profile.firebaseio.com/profiles/johnfedoruk.json").subscribe(
            (data) => {
                this.profile = data.json();
                this.loaded$.next(true);
            }
        )
    }

    public getProfile(): Observable<any> {
        return new Observable<any>(
            observer => {
                this.loaded$.subscribe(
                    (loaded: boolean) => {
                        if (loaded)
                            observer.next(this.profile);
                    }
                )
            }
        );
    }

    public getInfo(): Observable<any> {
        return new Observable<any>(
            observer => {
                this.getProfile().subscribe(
                    profile => {
                        observer.next(profile.info);
                    }
                )
            }
        )
    }

    public getName(): Observable<string> {
        return new Observable<any>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        observer.next(info.name);
                    }
                )
            }
        )
    }

    public getPhotos(): Observable<any> {
        return new Observable<any>(
            observer => {
                this.getProfile().subscribe(
                    profile => {
                        observer.next(profile.photos);
                    }
                )
            }
        );
    }

}
