import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MessageComponent } from './message.component';
import { FormsModule } from '@angular/forms';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent ],
      imports: [
        PerfectScrollbarModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
