import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyHomepageComponent } from './faculty-homepage.component';

describe('FacultyHomepageComponent', () => {
  let component: FacultyHomepageComponent;
  let fixture: ComponentFixture<FacultyHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
