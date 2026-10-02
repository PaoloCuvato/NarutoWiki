import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninja3 } from './ninja3';

describe('Ninja3', () => {
  let component: Ninja3;
  let fixture: ComponentFixture<Ninja3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninja3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninja3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
