import { Component, OnInit } from '@angular/core';
import { SlideshowService } from 'app/services/slideshow.service';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
    public images: any[];
    public image: string = "http://lifekefunde.com/wp-content/uploads/2018/02/life.jpg";
    constructor(private slideshow: SlideshowService) { }

    ngOnInit() {
        this.slideshow.images$.subscribe(
            images =>
                setTimeout(() => {
                    this.images = images;
                    if(this.show())
                        this.image = this.images[0];
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
}
