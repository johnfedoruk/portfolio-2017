import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPhotoComponent } from './cover-photo.component';
import { ProfileService } from '../../../services/profile.service';
import { SlideshowService } from '../../../services/slideshow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoverPhotoComponent', () => {
  let component: CoverPhotoComponent;
  let fixture: ComponentFixture<CoverPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPhotoComponent ],
      providers: [
        ProfileService,
        SlideshowService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
