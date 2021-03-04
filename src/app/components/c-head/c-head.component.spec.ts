import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHeadComponent } from './c-head.component';

describe('CHeadComponent', () => {
  let component: CHeadComponent;
  let fixture: ComponentFixture<CHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
