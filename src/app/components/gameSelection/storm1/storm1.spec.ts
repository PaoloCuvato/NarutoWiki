import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storm1 } from './storm1';

describe('Storm1', () => {
  let component: Storm1;
  let fixture: ComponentFixture<Storm1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storm1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storm1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
