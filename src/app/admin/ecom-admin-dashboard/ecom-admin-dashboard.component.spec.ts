import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminDashboardComponent } from './ecom-admin-dashboard.component';

describe('EcomAdminDashboardComponent', () => {
  let component: EcomAdminDashboardComponent;
  let fixture: ComponentFixture<EcomAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
