import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-activity.dialog',
  templateUrl: './activity.dialog.component.html',
  styleUrls: ['./activity.dialog.component.css']
})
export class ActivityDialogComponent implements OnInit {

  public pathname: any;

  constructor( @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.pathname = this.document.location.href;
    // this.pathname = window.location.pathname;
  }

  copyToClipboard() {
    document.querySelector('input').select();
    document.execCommand('copy');
  }
}
