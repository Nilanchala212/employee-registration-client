import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsDataComponent } from './employee-details-data.component';

describe('EmployeeDetailsDataComponent', () => {
  let component: EmployeeDetailsDataComponent;
  let fixture: ComponentFixture<EmployeeDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
