import { async, TestBed } from '@angular/core/testing';
import { SharedUiDatepickerModule } from './shared-ui-datepicker.module';

describe('SharedUiDatepickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiDatepickerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiDatepickerModule).toBeDefined();
  });
});
