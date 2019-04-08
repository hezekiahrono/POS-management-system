import { TestBed } from '@angular/core/testing';

import { HttpintercepterBasicAuthService } from './httpintercepter-basic-auth.service';

describe('HttpintercepterBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpintercepterBasicAuthService = TestBed.get(HttpintercepterBasicAuthService);
    expect(service).toBeTruthy();
  });
});
