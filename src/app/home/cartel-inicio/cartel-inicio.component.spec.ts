import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelInicioComponent } from './cartel-inicio.component';

describe('CartelInicioComponent', () => {
  let component: CartelInicioComponent;
  let fixture: ComponentFixture<CartelInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartelInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartelInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
