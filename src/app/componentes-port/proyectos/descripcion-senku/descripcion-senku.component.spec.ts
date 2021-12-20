import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionSenkuComponent } from './descripcion-senku.component';

describe('DescripcionSenkuComponent', () => {
  let component: DescripcionSenkuComponent;
  let fixture: ComponentFixture<DescripcionSenkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionSenkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionSenkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
