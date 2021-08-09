import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminAddBookComponent } from './ecom-admin-add-book.component';

describe('EcomAdminAddBookComponent', () => {
  let component: EcomAdminAddBookComponent;
  let fixture: ComponentFixture<EcomAdminAddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminAddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
