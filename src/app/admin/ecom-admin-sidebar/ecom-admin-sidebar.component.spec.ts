import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminSidebarComponent } from './ecom-admin-sidebar.component';

describe('EcomAdminSidebarComponent', () => {
  let component: EcomAdminSidebarComponent;
  let fixture: ComponentFixture<EcomAdminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
