import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormCons } from './storm-cons';

describe('StormCons', () => {
  let component: StormCons;
  let fixture: ComponentFixture<StormCons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormCons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormCons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
