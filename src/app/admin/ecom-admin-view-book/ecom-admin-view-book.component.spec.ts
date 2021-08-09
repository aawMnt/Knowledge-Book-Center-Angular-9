import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminViewBookComponent } from './ecom-admin-view-book.component';

describe('EcomAdminViewBookComponent', () => {
  let component: EcomAdminViewBookComponent;
  let fixture: ComponentFixture<EcomAdminViewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminViewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminViewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
