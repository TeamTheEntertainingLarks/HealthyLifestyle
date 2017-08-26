import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchWord: string) {

    searchWord = searchWord ? searchWord.toLowerCase() : null;

    return searchWord ? items.filter(item => {
      return item.title.toLowerCase().indexOf(searchWord) !== -1 ||
          item.author.toLowerCase().indexOf(searchWord) !== -1 ||
          item.category.toLowerCase().indexOf(searchWord) !== -1;
    }) : items;
  }
}
