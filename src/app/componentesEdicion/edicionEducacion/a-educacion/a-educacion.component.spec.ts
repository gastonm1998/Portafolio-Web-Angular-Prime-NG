import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEducacionComponent } from './a-educacion.component';

describe('AEducacionComponent', () => {
  let component: AEducacionComponent;
  let fixture: ComponentFixture<AEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
