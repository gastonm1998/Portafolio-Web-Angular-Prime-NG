import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionAnubisComponent } from './descripcion-anubis.component';

describe('DescripcionAnubisComponent', () => {
  let component: DescripcionAnubisComponent;
  let fixture: ComponentFixture<DescripcionAnubisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionAnubisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionAnubisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
