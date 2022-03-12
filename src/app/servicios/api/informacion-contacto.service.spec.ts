import { TestBed } from '@angular/core/testing';

import { InformacionContactoService } from './informacion-contacto.service';

describe('InformacionContactoService', () => {
  let service: InformacionContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
