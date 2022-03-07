import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESoftSkillComponent } from './e-soft-skill.component';

describe('ESoftSkillComponent', () => {
  let component: ESoftSkillComponent;
  let fixture: ComponentFixture<ESoftSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESoftSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESoftSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
