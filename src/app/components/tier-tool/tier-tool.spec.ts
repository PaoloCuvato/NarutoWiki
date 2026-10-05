import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierTool } from './tier-tool';

describe('TierTool', () => {
  let component: TierTool;
  let fixture: ComponentFixture<TierTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierTool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierTool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
