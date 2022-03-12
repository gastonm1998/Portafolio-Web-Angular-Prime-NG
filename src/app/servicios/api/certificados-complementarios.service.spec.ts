import { TestBed } from '@angular/core/testing';

import { CertificadosComplementariosService } from './certificados-complementarios.service';

describe('CertificadosComplementariosService', () => {
  let service: CertificadosComplementariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosComplementariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
