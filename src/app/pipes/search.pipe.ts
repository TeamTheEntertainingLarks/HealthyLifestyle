import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchWord: string) {
    if (!items) {
      return null;
    }

    searchWord = searchWord.toLowerCase();

    return items.filter(item => {
      return item.title.toLowerCase().indexOf(searchWord) >= 0 ||
        item.author.toLowerCase().indexOf(searchWord) >= 0;
    });
  }
}
