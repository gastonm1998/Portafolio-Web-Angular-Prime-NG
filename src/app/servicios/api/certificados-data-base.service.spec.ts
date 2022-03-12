import { TestBed } from '@angular/core/testing';

import { CertificadosDataBaseService } from './certificados-data-base.service';

describe('CertificadosDataBaseService', () => {
  let service: CertificadosDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
