import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { GithubComponent } from './github.component';
import { HttpModule } from '@angular/http';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubComponent ],
      imports: [
        MarkdownToHtmlModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
