import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInformacionComponent } from './e-informacion.component';

describe('EInformacionComponent', () => {
  let component: EInformacionComponent;
  let fixture: ComponentFixture<EInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
