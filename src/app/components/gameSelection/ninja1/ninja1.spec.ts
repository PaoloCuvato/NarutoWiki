import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninja1 } from './ninja1';

describe('Ninja1', () => {
  let component: Ninja1;
  let fixture: ComponentFixture<Ninja1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninja1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninja1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
