import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaImpact } from './ninja-impact';

describe('NinjaImpact', () => {
  let component: NinjaImpact;
  let fixture: ComponentFixture<NinjaImpact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaImpact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinjaImpact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
