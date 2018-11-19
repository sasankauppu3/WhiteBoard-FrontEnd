import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  @Input() widget;
  constructor() {
  }

  htmlList;
  ngOnInit() {
    const list = this.widget.items ? this.widget.items.split(',') : [];
    this.htmlList = list;

    }
}
