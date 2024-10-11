import { TestBed } from '@angular/core/testing';

import { LabelManagementServiceService } from './label-management-service.service';

describe('LabelManagementServiceService', () => {
  let service: LabelManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
