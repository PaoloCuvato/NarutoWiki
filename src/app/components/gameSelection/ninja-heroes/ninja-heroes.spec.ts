import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaHeroes } from './ninja-heroes';

describe('NinjaHeroes', () => {
  let component: NinjaHeroes;
  let fixture: ComponentFixture<NinjaHeroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaHeroes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinjaHeroes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
