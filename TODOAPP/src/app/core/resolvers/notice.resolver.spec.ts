import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { noticeResolver } from './notice.resolver';

describe('noticeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => noticeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
