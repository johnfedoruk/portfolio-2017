import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GitGraphModule } from '../../modules/git-graph/git-graph.module';
import { ProfileService } from '../../services/profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimelineService } from '../../services/timeline.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        SidebarComponent,
        TimelineComponent
      ],
      providers: [
        ProfileService,
        TimelineService
      ],
      imports: [
        GitGraphModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
