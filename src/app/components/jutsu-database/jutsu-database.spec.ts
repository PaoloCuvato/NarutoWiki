import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JutsuDatabase } from './jutsu-database';

describe('JutsuDatabase', () => {
  let component: JutsuDatabase;
  let fixture: ComponentFixture<JutsuDatabase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JutsuDatabase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JutsuDatabase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
