import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInformacionTelefonoComponent } from './e-informacion-telefono.component';

describe('EInformacionTelefonoComponent', () => {
  let component: EInformacionTelefonoComponent;
  let fixture: ComponentFixture<EInformacionTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInformacionTelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInformacionTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
