import { TestBed } from '@angular/core/testing';

import { CertificadosIoTService } from './certificados-io-t.service';

describe('CertificadosIoTService', () => {
  let service: CertificadosIoTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosIoTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
