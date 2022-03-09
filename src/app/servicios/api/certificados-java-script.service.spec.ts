import { TestBed } from '@angular/core/testing';

import { CertificadosJavaScriptService } from './certificados-java-script.service';

describe('CertificadosJavaScriptService', () => {
  let service: CertificadosJavaScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosJavaScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
