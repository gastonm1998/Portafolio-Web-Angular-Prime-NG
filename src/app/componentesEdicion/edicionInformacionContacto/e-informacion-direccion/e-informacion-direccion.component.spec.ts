import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInformacionDireccionComponent } from './e-informacion-direccion.component';

describe('EInformacionDireccionComponent', () => {
  let component: EInformacionDireccionComponent;
  let fixture: ComponentFixture<EInformacionDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInformacionDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInformacionDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
