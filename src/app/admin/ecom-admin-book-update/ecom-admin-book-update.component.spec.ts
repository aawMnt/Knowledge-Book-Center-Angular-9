import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAdminBookUpdateComponent } from './ecom-admin-book-update.component';

describe('EcomAdminBookUpdateComponent', () => {
  let component: EcomAdminBookUpdateComponent;
  let fixture: ComponentFixture<EcomAdminBookUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAdminBookUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAdminBookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
