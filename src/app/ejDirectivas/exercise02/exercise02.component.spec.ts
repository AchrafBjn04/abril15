import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise02Component } from './exercise02.component';

describe('Exercise02Component', () => {
  let component: Exercise02Component;
  let fixture: ComponentFixture<Exercise02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
