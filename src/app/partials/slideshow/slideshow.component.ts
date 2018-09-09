import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'app/services/slideshow.service';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

    public index: number;
    public images: any[];
    constructor(private slideshow: SlideshowService) { }

    ngOnInit() {
        this.slideshow.images$.subscribe(
            images =>
                setTimeout(() => {
                    this.images = images;
                    this.index = 0;
                }, 1)
        );
    }

    public closeImages(): void {
        this.slideshow.close();
    }

    public show(): boolean {
        return this.images !== undefined && this.images !== [] && this.images.length !== undefined && this.images.length > 0;
    }

    public doNothing($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();
    }

    public prev(): void {
        if (this.index !== 0) {
            this.index--;
        }
    }

    public next(): void {
        if (this.index !== this.images.length - 1) {
            this.index++;
        }
    }

}
