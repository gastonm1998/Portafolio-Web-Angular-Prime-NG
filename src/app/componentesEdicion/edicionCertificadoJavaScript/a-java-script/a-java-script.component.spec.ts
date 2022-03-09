import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AJavaScriptComponent } from './a-java-script.component';

describe('AJavaScriptComponent', () => {
  let component: AJavaScriptComponent;
  let fixture: ComponentFixture<AJavaScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AJavaScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AJavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
