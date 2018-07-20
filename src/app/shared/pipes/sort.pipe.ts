import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "sort"
})

export class sortPipe implements PipeTransform {
  transform(items: any[], sortDirection: boolean): any {
      return items.reverse();
  }
}


