import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersdetailsComponent } from './customersdetails.component';

describe('CustomersdetailsComponent', () => {
  let component: CustomersdetailsComponent;
  let fixture: ComponentFixture<CustomersdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersdetailsComponent]
    });
    fixture = TestBed.createComponent(CustomersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
