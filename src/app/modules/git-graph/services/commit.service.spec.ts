import { TestBed, inject } from '@angular/core/testing';

import { CommitService } from './commit.service';
import { HttpModule } from '@angular/http';

describe('CommitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([CommitService], (service: CommitService) => {
    expect(service).toBeTruthy();
  }));
});
