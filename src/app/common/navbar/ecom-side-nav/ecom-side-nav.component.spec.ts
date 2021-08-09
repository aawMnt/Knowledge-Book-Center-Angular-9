import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomSideNavComponent } from './ecom-side-nav.component';

describe('EcomSideNavComponent', () => {
  let component: EcomSideNavComponent;
  let fixture: ComponentFixture<EcomSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
