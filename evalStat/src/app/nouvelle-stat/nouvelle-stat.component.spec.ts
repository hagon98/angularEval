import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleStatComponent } from './nouvelle-stat.component';

describe('NouvelleStatComponent', () => {
  let component: NouvelleStatComponent;
  let fixture: ComponentFixture<NouvelleStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
