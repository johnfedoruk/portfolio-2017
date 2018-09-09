import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GitGraphComponent } from './git-graph.component';
import { HtmlPipe } from './pipes/html.pipe';
import { CommitService } from './services/commit.service';

describe('GitGraphComponent', () => {
  let component: GitGraphComponent;
  let fixture: ComponentFixture<GitGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [GitGraphComponent, HtmlPipe],
      providers: [CommitService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
