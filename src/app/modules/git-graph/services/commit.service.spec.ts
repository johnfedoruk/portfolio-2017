import { TestBed, inject } from '@angular/core/testing';

import { CommitService } from './commit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([CommitService], (service: CommitService) => {
    expect(service).toBeTruthy();
  }));
});
