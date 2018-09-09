import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesComponent } from './places.component';
import { ProfileService } from '../../../services/profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { String2DatePipe } from '../../../pipes/string-2-date.pipe';

describe('PlacesComponent', () => {
  let component: PlacesComponent;
  let fixture: ComponentFixture<PlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlacesComponent,
        String2DatePipe
      ],
      providers: [
        ProfileService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
