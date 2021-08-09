import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomOrdersViewComponent } from './ecom-orders-view.component';

describe('EcomOrdersViewComponent', () => {
  let component: EcomOrdersViewComponent;
  let fixture: ComponentFixture<EcomOrdersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomOrdersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
