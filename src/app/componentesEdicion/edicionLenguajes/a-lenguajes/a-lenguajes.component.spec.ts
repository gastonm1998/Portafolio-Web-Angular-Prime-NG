import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALenguajesComponent } from './a-lenguajes.component';

describe('ALenguajesComponent', () => {
  let component: ALenguajesComponent;
  let fixture: ComponentFixture<ALenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALenguajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
