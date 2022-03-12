import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComplementosComponent } from './a-complementos.component';

describe('AComplementosComponent', () => {
  let component: AComplementosComponent;
  let fixture: ComponentFixture<AComplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComplementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
