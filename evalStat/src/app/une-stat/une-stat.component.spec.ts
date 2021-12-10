import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneStatComponent } from './une-stat.component';

describe('UneStatComponent', () => {
  let component: UneStatComponent;
  let fixture: ComponentFixture<UneStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
