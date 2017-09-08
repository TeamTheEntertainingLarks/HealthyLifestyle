import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Input() items;
  @Output() onSendingItems = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  orderByDateAsc() {
    this.onSendingItems.emit(this.items.sort((a, b) => +a.createdOn - +b.createdOn));
  }

  orderByDateDesc() {
    this.onSendingItems.emit(this.items.sort((a, b) => +b.createdOn - +a.createdOn));
  }

  orderByTitleAsc() {
    this.onSendingItems.emit(this.items.sort((a, b) => a.title.localeCompare(b.title)));
  }

  orderByTitleDesc() {
    this.onSendingItems.emit(this.items.sort((a, b) => b.title.localeCompare(a.title)));
  }

}
