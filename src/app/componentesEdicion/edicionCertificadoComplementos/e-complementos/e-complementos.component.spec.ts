import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EComplementosComponent } from './e-complementos.component';

describe('EComplementosComponent', () => {
  let component: EComplementosComponent;
  let fixture: ComponentFixture<EComplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EComplementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EComplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
