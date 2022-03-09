import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EJavaScriptComponent } from './e-java-script.component';

describe('EJavaScriptComponent', () => {
  let component: EJavaScriptComponent;
  let fixture: ComponentFixture<EJavaScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EJavaScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EJavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
