import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSurveyComponent } from './print-survey.component';

describe('PrintSurveyComponent', () => {
  let component: PrintSurveyComponent;
  let fixture: ComponentFixture<PrintSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
