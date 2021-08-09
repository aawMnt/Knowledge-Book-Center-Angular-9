import { TestBed } from '@angular/core/testing';

import { EcomAdminGuard } from './ecom-admin.guard';

describe('EcomAdminGuard', () => {
  let guard: EcomAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EcomAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
