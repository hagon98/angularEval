import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesStatComponent } from './les-stat.component';

describe('LesStatComponent', () => {
  let component: LesStatComponent;
  let fixture: ComponentFixture<LesStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
