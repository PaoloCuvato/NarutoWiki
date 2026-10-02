import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyGames } from './legacy-games';

describe('LegacyGames', () => {
  let component: LegacyGames;
  let fixture: ComponentFixture<LegacyGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegacyGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegacyGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
