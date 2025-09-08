import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { newsResolver } from './news.resolver';

describe('newsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => newsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
