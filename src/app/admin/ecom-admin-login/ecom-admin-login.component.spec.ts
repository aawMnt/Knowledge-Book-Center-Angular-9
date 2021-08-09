import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminLoginComponent } from './ecom-admin-login.component';

describe('EcomAdminLoginComponent', () => {
  let component: EcomAdminLoginComponent;
  let fixture: ComponentFixture<EcomAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
