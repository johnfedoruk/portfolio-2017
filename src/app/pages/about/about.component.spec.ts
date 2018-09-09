import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { String2DatePipe } from '../../pipes/string-2-date.pipe';
import { ProfileService } from '../../services/profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { OverviewComponent } from '../code/overview/overview.component';
import { PlacesComponent } from './places/places.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        ContactComponent,
        EducationComponent,
        OverviewComponent,
        PlacesComponent,
        ProjectsComponent,
        WorkComponent,
        String2DatePipe
      ],
      providers: [
        ProfileService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
