import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEducacionComponent } from './e-educacion.component';

describe('EEducacionComponent', () => {
  let component: EEducacionComponent;
  let fixture: ComponentFixture<EEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
