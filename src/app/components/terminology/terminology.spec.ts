import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terminology } from './terminology';

describe('Terminology', () => {
  let component: Terminology;
  let fixture: ComponentFixture<Terminology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terminology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terminology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
