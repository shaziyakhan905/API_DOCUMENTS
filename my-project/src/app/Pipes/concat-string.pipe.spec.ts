import { ConcatStringPipe } from './concat-string.pipe';

describe('ConcatStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatStringPipe();
    expect(pipe).toBeTruthy();
  });
});
