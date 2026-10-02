import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityProjects } from './community-projects';

describe('CommunityProjects', () => {
  let component: CommunityProjects;
  let fixture: ComponentFixture<CommunityProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
