import { TestBed } from '@angular/core/testing';

import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

describe('CustomPreloadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadingStrategyService = TestBed.get(CustomPreloadingStrategyService);
    expect(service).toBeTruthy();
  });
});
