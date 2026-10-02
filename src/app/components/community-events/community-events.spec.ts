import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityEvents } from './community-events';

describe('CommunityEvents', () => {
  let component: CommunityEvents;
  let fixture: ComponentFixture<CommunityEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
