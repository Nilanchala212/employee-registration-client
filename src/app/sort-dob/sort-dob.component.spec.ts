import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDobComponent } from './sort-dob.component';

describe('SortDobComponent', () => {
  let component: SortDobComponent;
  let fixture: ComponentFixture<SortDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
