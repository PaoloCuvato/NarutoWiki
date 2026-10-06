import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdingResources } from './modding-resources';

describe('ModdingResources', () => {
  let component: ModdingResources;
  let fixture: ComponentFixture<ModdingResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModdingResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModdingResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
