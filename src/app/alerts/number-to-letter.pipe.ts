import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToLetter'
})
export class NumberToLetterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return String.fromCharCode(97+(value%26));
  }

}
