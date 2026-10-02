import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaHeroes3 } from './ninja-heroes3';

describe('NinjaHeroes3', () => {
  let component: NinjaHeroes3;
  let fixture: ComponentFixture<NinjaHeroes3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaHeroes3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinjaHeroes3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
