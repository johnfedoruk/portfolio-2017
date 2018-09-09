import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { ProfileService } from '../../../services/profile.service';
import { HttpModule } from '@angular/http';
import { GitGraphComponent } from '../../../modules/git-graph/git-graph.component';
import { HtmlPipe } from '../../../modules/git-graph/pipes/html.pipe';
import { GitGraphModule } from '../../../modules/git-graph/git-graph.module';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ],
      providers: [
        ProfileService
      ],
      imports: [
        HttpModule,
        GitGraphModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
