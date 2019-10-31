import { TestBed } from '@angular/core/testing';

import { MockDetailsService } from './mock-details.service';

describe('MockDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDetailsService = TestBed.get(MockDetailsService);
    expect(service).toBeTruthy();
  });
});
