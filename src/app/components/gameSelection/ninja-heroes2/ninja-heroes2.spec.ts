import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaHeroes2 } from './ninja-heroes2';

describe('NinjaHeroes2', () => {
  let component: NinjaHeroes2;
  let fixture: ComponentFixture<NinjaHeroes2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaHeroes2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinjaHeroes2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
