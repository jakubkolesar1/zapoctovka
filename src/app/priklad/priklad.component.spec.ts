import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikladComponent } from './priklad.component';

describe('PrikladComponent', () => {
  let component: PrikladComponent;
  let fixture: ComponentFixture<PrikladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
