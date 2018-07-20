import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class searchPipe implements PipeTransform {
  transform(items: any[], searchStr: string): any {
    if (!items || !searchStr) {
      return items;
    }
    return items.filter(item => item.name.indexOf(searchStr) !== -1);
  }
}
