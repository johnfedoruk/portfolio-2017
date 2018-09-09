import { TestBed, inject } from '@angular/core/testing';

import { MailService } from './mail.service';
import { HttpModule } from '@angular/http';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});
