import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AExperienciaComponent } from './a-experiencia.component';

describe('AExperienciaComponent', () => {
  let component: AExperienciaComponent;
  let fixture: ComponentFixture<AExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
