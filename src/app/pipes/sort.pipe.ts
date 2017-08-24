import { Pipe, PipeTransform } from '@angular/core';

function orderByAsc(a, b) {
  return a.localeCompare(b);
}

function orderByDesc(a, b) {
  return b.localeCompare(a);
}

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(items: any[], order: number, sortBy?: string) {
    if (items) {
      if (sortBy) {
        if (order === -1) {
          return items.sort((a, b) => {
            return b[sortBy].toString().localeCompare(a[sortBy].toString());
          });
        } else {
          return items.sort((a, b) => {
            return a[sortBy].toString().localeCompare(b[sortBy].toString());
          });
        }
      } else {
        return items;
      }
    }
  }
}
