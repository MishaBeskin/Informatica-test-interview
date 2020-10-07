import { TestBed } from '@angular/core/testing';

import { EmployessListService } from './employess-list.service';

describe('EmployessListService', () => {
  let service: EmployessListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployessListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
