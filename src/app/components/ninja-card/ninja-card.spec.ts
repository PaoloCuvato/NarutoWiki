import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaCard } from './ninja-card';

describe('NinjaCard', () => {
  let component: NinjaCard;
  let fixture: ComponentFixture<NinjaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinjaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
