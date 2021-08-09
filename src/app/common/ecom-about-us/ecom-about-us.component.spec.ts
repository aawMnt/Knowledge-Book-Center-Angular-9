import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomAboutUsComponent } from './ecom-about-us.component';

describe('EcomAboutUsComponent', () => {
  let component: EcomAboutUsComponent;
  let fixture: ComponentFixture<EcomAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
