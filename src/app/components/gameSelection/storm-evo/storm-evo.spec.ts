import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormEvo } from './storm-evo';

describe('StormEvo', () => {
  let component: StormEvo;
  let fixture: ComponentFixture<StormEvo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormEvo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormEvo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
