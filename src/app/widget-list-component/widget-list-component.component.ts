import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {

  widgets = [];
  widgetId;
  topicId;
  lessonId;
  moduleId;
  courseId;

  constructor(private service: WidgetServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.widgetId = params['widgetId'];
    this.loadWidget(params['topicId']);
  }

  loadWidget(topicId) {
    this.service.findWidgetsForTopic(topicId).then(res => this.widgets = res)
      .then(res => this.widgets = this.widgets.sort((w1, w2) => (w1.listind < w2.listind ) ? -1 : (w1.listind > w2.listind ) ? 1 : 0))
  }


  ngOnInit() {
  }

}
