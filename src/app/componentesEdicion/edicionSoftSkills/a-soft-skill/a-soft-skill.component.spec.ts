import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASoftSkillComponent } from './a-soft-skill.component';

describe('ASoftSkillComponent', () => {
  let component: ASoftSkillComponent;
  let fixture: ComponentFixture<ASoftSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASoftSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASoftSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
