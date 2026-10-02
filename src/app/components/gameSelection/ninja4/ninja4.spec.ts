import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninja4 } from './ninja4';

describe('Ninja4', () => {
  let component: Ninja4;
  let fixture: ComponentFixture<Ninja4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninja4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninja4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
