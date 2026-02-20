import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storm4 } from './storm4';

describe('Storm4', () => {
  let component: Storm4;
  let fixture: ComponentFixture<Storm4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storm4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storm4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
