import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninja5 } from './ninja5';

describe('Ninja5', () => {
  let component: Ninja5;
  let fixture: ComponentFixture<Ninja5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninja5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninja5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
