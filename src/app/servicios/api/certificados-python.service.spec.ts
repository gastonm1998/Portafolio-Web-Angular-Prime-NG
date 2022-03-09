import { TestBed } from '@angular/core/testing';

import { CertificadosPythonService } from './certificados-python.service';

describe('CertificadosPythonService', () => {
  let service: CertificadosPythonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosPythonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
