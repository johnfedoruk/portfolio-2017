import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string2Date'
})
export class String2DatePipe implements PipeTransform {

  transform(str: string): Date {
    const date: Date = new Date(str);
    return date;
    // return date.setDate(date.getDate()+1);
  }

}
