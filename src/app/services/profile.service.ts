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

    public getGithub(): Observable<string> {
        return new Observable<string>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        observer.next(info.github);
                    }
                )
            }
        )
    }

    public getIntro(): Observable<string> {
        return new Observable<string>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        observer.next(info.intro);
                    }
                )
            }
        )
    }

    public getContact(): Observable<any> {
        return new Observable<any>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        observer.next(info.contact);
                    }
                )
            }
        )
    }

    public getLinks(): Observable<any[]> {
        return new Observable<any[]>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        observer.next(info.links);
                    }
                )
            }
        )
    }

    public getEmails(): Observable<string[]> {
        return new Observable<string[]>(
            observer => {
                this.getContact().subscribe(
                    contact => {
                        observer.next(contact.emails);
                    }
                )
            }
        )
    }

    public getPhones(): Observable<string[]> {
        return new Observable<string[]>(
            observer => {
                this.getContact().subscribe(
                    contact => {
                        observer.next(contact.phones);
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

    public getProfilePhotos(): Observable<any[]> {
        return new Observable<any>(
            observer => {
                this.getPhotos().subscribe(
                    photos => {
                        observer.next(photos["profile-photos"]);
                    }
                )
            }
        );
    }

    public getCoverPhotos(): Observable<any[]> {
        return new Observable<any>(
            observer => {
                this.getPhotos().subscribe(
                    photos => {
                        observer.next(photos["cover-photos"]);
                    }
                )
            }
        );
    }

}
