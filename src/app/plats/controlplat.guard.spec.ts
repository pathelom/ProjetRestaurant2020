import { TestBed, async, inject } from '@angular/core/testing';

import { ControlplatGuard } from './controlplat.guard';

describe('ControlplatGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlplatGuard]
    });
  });

  it('should ...', inject([ControlplatGuard], (guard: ControlplatGuard) => {
    expect(guard).toBeTruthy();
  }));
});
