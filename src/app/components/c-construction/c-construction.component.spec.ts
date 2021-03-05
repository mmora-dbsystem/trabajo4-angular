import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CConstructionComponent } from './c-construction.component';

describe('CConstructionComponent', () => {
  let component: CConstructionComponent;
  let fixture: ComponentFixture<CConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
