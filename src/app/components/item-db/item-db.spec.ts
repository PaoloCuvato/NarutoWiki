import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDb } from './item-db';

describe('ItemDb', () => {
  let component: ItemDb;
  let fixture: ComponentFixture<ItemDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
