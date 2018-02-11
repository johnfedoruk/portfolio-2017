import { TestBed, inject } from '@angular/core/testing';

import { SlideshowService } from './slideshow.service';

describe('SlideshowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideshowService]
    });
  });

  it('should ...', inject([SlideshowService], (service: SlideshowService) => {
    expect(service).toBeTruthy();
  }));
});
