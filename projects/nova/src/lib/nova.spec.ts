import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nova } from './nova';

describe('Nova', () => {
  let component: Nova;
  let fixture: ComponentFixture<Nova>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nova],
    }).compileComponents();

    fixture = TestBed.createComponent(Nova);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
