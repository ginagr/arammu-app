import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFeedbackComponent } from './generate-feedback.component';

describe('GenerateFeedbackComponent', () => {
  let component: GenerateFeedbackComponent;
  let fixture: ComponentFixture<GenerateFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
