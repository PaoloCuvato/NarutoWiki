import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninja2 } from './ninja2';

describe('Ninja2', () => {
  let component: Ninja2;
  let fixture: ComponentFixture<Ninja2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninja2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninja2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
