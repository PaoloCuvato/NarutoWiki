import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storm3 } from './storm3';

describe('Storm3', () => {
  let component: Storm3;
  let fixture: ComponentFixture<Storm3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storm3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storm3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
