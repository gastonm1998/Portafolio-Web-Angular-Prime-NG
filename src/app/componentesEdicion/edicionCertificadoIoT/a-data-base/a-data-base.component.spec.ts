import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADataBaseComponent } from './a-data-base.component';

describe('ADataBaseComponent', () => {
  let component: ADataBaseComponent;
  let fixture: ComponentFixture<ADataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADataBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
