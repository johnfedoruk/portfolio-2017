import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { NpmComponent } from './npm.component';
import { HttpModule } from '@angular/http';

describe('NpmComponent', () => {
  let component: NpmComponent;
  let fixture: ComponentFixture<NpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmComponent ],
      imports: [
        MarkdownToHtmlModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
