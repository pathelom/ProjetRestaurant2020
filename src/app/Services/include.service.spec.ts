import { TestBed } from '@angular/core/testing';

import { IncludeService } from './include.service';

describe('IncludeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncludeService = TestBed.get(IncludeService);
    expect(service).toBeTruthy();
  });
});
