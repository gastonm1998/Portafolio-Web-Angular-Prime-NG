import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIoTComponent } from './a-io-t.component';

describe('AIoTComponent', () => {
  let component: AIoTComponent;
  let fixture: ComponentFixture<AIoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIoTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AIoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
