import { TestBed, inject } from '@angular/core/testing';

import { TimelineService } from './timeline.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TimelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineService],
      imports: [
        HttpClientTestingModule,
      ]
    });
  });

  it('should be created', inject([TimelineService], (service: TimelineService) => {
    expect(service).toBeTruthy();
  }));
});
