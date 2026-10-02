import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHighlights } from './community-highlights';

describe('CommunityHighlights', () => {
  let component: CommunityHighlights;
  let fixture: ComponentFixture<CommunityHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityHighlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityHighlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
