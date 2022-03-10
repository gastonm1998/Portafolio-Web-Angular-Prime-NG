import { TestBed } from '@angular/core/testing';

import { CertificadosHtmlCssService } from './certificados-html-css.service';

describe('CertificadosHtmlCssService', () => {
  let service: CertificadosHtmlCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosHtmlCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
