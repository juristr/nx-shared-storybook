import { async, TestBed } from '@angular/core/testing';
import { SharedUiGreeterModule } from './shared-ui-greeter.module';

describe('SharedUiGreeterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiGreeterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiGreeterModule).toBeDefined();
  });
});
