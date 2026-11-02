import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormRev } from './storm-rev';

describe('StormRev', () => {
  let component: StormRev;
  let fixture: ComponentFixture<StormRev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormRev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormRev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
