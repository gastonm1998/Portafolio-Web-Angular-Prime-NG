import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELenguajesComponent } from './e-lenguajes.component';

describe('ELenguajesComponent', () => {
  let component: ELenguajesComponent;
  let fixture: ComponentFixture<ELenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELenguajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
