import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoguinComponent } from './c-loguin.component';

describe('CLoguinComponent', () => {
  let component: CLoguinComponent;
  let fixture: ComponentFixture<CLoguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLoguinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
