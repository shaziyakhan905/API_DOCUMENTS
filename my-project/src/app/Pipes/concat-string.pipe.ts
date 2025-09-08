import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatString'
})
export class ConcatStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
