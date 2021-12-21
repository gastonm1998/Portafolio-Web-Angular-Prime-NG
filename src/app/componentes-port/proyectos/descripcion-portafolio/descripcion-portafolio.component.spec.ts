import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPortafolioComponent } from './descripcion-portafolio.component';

describe('DescripcionPortafolioComponent', () => {
  let component: DescripcionPortafolioComponent;
  let fixture: ComponentFixture<DescripcionPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
