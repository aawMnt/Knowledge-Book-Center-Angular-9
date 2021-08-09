import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomViewDetailsComponent } from './ecom-view-details.component';

describe('EcomViewDetailsComponent', () => {
  let component: EcomViewDetailsComponent;
  let fixture: ComponentFixture<EcomViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
