import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoomingSoon } from './cooming-soon';

describe('CoomingSoon', () => {
  let component: CoomingSoon;
  let fixture: ComponentFixture<CoomingSoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoomingSoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoomingSoon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
