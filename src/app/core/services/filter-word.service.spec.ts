import { TestBed } from '@angular/core/testing';

import { FilterWordService } from './filter-word.service';

describe('FilterWordService', () => {
  let service: FilterWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
