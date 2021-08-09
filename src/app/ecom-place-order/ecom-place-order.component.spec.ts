import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomPlaceOrderComponent } from './ecom-place-order.component';

describe('EcomPlaceOrderComponent', () => {
  let component: EcomPlaceOrderComponent;
  let fixture: ComponentFixture<EcomPlaceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomPlaceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
