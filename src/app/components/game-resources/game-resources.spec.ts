import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResources } from './game-resources';

describe('GameResources', () => {
  let component: GameResources;
  let fixture: ComponentFixture<GameResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
