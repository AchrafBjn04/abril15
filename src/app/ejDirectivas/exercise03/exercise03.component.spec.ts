import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise03Component } from './exercise03.component';

describe('Exercise03Component', () => {
  let component: Exercise03Component;
  let fixture: ComponentFixture<Exercise03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercise03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
