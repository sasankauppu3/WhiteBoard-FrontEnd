import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  lessons;
  moduleId;

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadLesson(params['moduleId']));
  }

  loadLesson(moduleId) {
    this.moduleId = moduleId;
    this.service.findLessonsForModule(moduleId).then(res => this.lessons = res);
  }


  ngOnInit() {
  }

}
