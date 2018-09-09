import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCoverComponent } from './profile-cover.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileService } from '../../services/profile.service';
import { HttpModule } from '@angular/http';
import { SlideshowService } from '../../services/slideshow.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileCoverComponent', () => {
  let component: ProfileCoverComponent;
  let fixture: ComponentFixture<ProfileCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileCoverComponent,
        CoverPhotoComponent,
        ProfilePictureComponent,
        ProfileNavComponent
      ],
      providers: [
        ProfileService,
        SlideshowService
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
