import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: {firstName: string, middleName: string, lastName: string}, args?: any): any {
    return value.firstName + ' ' + value.middleName[0] + '. ' + value.lastName;
  }

}
