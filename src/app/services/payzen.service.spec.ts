import { TestBed } from '@angular/core/testing';

import { PayzenService } from './payzen.service';

describe('PayzenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayzenService = TestBed.get(PayzenService);
    expect(service).toBeTruthy();
  });
});
