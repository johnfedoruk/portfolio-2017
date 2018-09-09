import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureComponent } from './profile-picture.component';
import { ProfileService } from '../../../services/profile.service';
import { SlideshowService } from '../../../services/slideshow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfilePictureComponent', () => {
  let component: ProfilePictureComponent;
  let fixture: ComponentFixture<ProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePictureComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ProfileService,
        SlideshowService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
