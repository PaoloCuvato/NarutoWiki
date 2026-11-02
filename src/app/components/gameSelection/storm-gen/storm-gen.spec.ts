import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormGen } from './storm-gen';

describe('StormGen', () => {
  let component: StormGen;
  let fixture: ComponentFixture<StormGen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormGen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormGen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
