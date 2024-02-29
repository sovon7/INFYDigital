import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalIntroductionComponent } from './digital-introduction.component';

describe('DigitalIntroductionComponent', () => {
  let component: DigitalIntroductionComponent;
  let fixture: ComponentFixture<DigitalIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalIntroductionComponent]
    });
    fixture = TestBed.createComponent(DigitalIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
