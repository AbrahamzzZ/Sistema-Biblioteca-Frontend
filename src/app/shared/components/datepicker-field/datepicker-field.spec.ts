import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerField } from './datepicker-field';

describe('DatepickerField', () => {
  let component: DatepickerField;
  let fixture: ComponentFixture<DatepickerField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
