import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminHomeComponent } from './ecom-admin-home.component';

describe('EcomAdminHomeComponent', () => {
  let component: EcomAdminHomeComponent;
  let fixture: ComponentFixture<EcomAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
