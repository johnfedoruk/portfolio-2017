import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { ProfileService } from '../../../services/profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { String2DatePipe } from '../../../pipes/string-2-date.pipe';
import { CommitService } from '../../../modules/git-graph/services/commit.service';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OverviewComponent,
        String2DatePipe
      ],
      providers: [
        ProfileService,
        CommitService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
