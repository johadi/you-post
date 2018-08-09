import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readStatus',
  pure: false
})
export class ReadStatusPipe implements PipeTransform {

  transform(value: any, userId: any, readersId: any[]): any {
    const readerIdIndex = readersId.findIndex(readerId => readerId === userId);
    if (readerIdIndex === -1) {
      return value;
    }

    return 'read';
  }

}
