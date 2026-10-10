import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCooldown } from './character-cooldown';

describe('CharacterCooldown', () => {
  let component: CharacterCooldown;
  let fixture: ComponentFixture<CharacterCooldown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCooldown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCooldown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
