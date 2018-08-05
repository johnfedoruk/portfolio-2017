import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import * as _ from "lodash";
import { environment } from 'environments/environment';
import { Profile } from '../models/profile/profile';
import { Info } from '../models/profile/info';
import { Link } from '../models/profile/link';
import { Contact } from '../models/profile/contact';
import { Education } from '../models/profile/education';
import { Work } from '../models/profile/work';
import { Location } from '../models/profile/location';
import { Project } from '../models/profile/project';
import { Gallery } from '../models/profile/gallery';
import { Photo } from '../models/profile/photo';

@Injectable()
export class ProfileService {

    private loaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private profile: Profile;

    constructor(private http: Http) {
        // const url: string = `https://tech-profile.firebaseio.com/profiles/${environment.username}.json`;
        const url: string = `${environment.api}/portfolio/${environment.id}/profile`;
        this.http.get(url).subscribe(
            (data) => {
                this.profile = data.json();
                this.loaded$.next(true);
            }
        )
    }

    public getProfile(): Observable<Profile> {
        return new Observable<Profile>(
            observer => {
                this.loaded$.subscribe(
                    (loaded: boolean) => {
                        if (loaded)
                            observer.next(_.cloneDeep(this.profile));
                    }
                )
            }
        );
    }

    public getInfo(): Observable<Info> {
        return new Observable<Info>(
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
        return new Observable<string>(
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

    public getContact(): Observable<Contact> {
        return new Observable<Contact>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        observer.next(info.contact);
                    }
                )
            }
        )
    }

    public getLinks(): Observable<Link[]> {
        return new Observable<Link[]>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        _.remove(info.links, _.isEmpty);
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
                        _.remove(contact.emails, _.isEmpty);
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
                        _.remove(contact.phones, _.isEmpty);
                        observer.next(contact.phones);
                    }
                )
            }
        )
    }

    public getEducation(): Observable<Education[]> {
        return new Observable<Education[]>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        _.remove(info.education, _.isEmpty);
                        observer.next(info.education);
                    }
                )
            }
        )
    }

    public getWork(): Observable<Work[]> {
        return new Observable<Work[]>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        _.remove(info.work, _.isEmpty);
                        observer.next(info.work);
                    }
                )
            }
        )
    }

    public getLocations(): Observable<Location[]> {
        return new Observable<Location[]>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        _.remove(info.locations, _.isEmpty);
                        observer.next(info.locations);
                    }
                )
            }
        )
    }

    public getProjects(): Observable<Project[]> {
        return new Observable<Project[]>(
            observer => {
                this.getInfo().subscribe(
                    info => {
                        _.remove(info.projects, _.isEmpty);
                        observer.next(info.projects);
                    }
                )
            }
        )
    }

    public getPhotos(): Observable<Gallery> {
        return new Observable<Gallery>(
            observer => {
                this.getProfile().subscribe(
                    profile => {
                        observer.next(profile.photos);
                    }
                )
            }
        );
    }

    public getProfilePhotos(): Observable<Photo[]> {
        return new Observable<Photo[]>(
            observer => {
                this.getPhotos().subscribe(
                    photos => {
                        _.remove(photos["profile-photos"], _.isEmpty);
                        observer.next(photos["profile-photos"]);
                    }
                )
            }
        );
    }

    public getCoverPhotos(): Observable<Photo[]> {
        return new Observable<Photo[]>(
            observer => {
                this.getPhotos().subscribe(
                    photos => {
                        _.remove(photos["cover-photos"], _.isEmpty);
                        observer.next(photos["cover-photos"]);
                    }
                )
            }
        );
    }

}
