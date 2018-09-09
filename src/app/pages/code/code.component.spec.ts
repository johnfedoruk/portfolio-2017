import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CodeComponent } from './code.component';
import { NpmComponent } from './npm/npm.component';
import { GithubComponent } from './github/github.component';
import { OverviewComponent } from './overview/overview.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { HttpModule } from '@angular/http';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeComponent,
        OverviewComponent,
        NpmComponent,
        GithubComponent
      ],
      imports: [
        MarkdownToHtmlModule,
        RouterTestingModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
