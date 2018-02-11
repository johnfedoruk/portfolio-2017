import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SlideshowService {

    private images: any[] = [];
    public images$: Subject<any[]> = new Subject<any[]>();

    constructor() { }

    public addImages(images: any[]): void {
        this.images = images;
        this.images$.next(images);
    }

    public close(): void {
        this.images = [];
        this.images$.next([]);
    }

}
