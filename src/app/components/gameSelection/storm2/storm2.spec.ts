import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storm2 } from './storm2';

describe('Storm2', () => {
  let component: Storm2;
  let fixture: ComponentFixture<Storm2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storm2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storm2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
