import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDataBaseComponent } from './e-data-base.component';

describe('EDataBaseComponent', () => {
  let component: EDataBaseComponent;
  let fixture: ComponentFixture<EDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDataBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
