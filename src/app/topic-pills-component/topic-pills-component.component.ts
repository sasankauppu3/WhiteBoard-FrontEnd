import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  topics=[];
  topicId;
  lessonId;
  moduleId;
  courseId;

  constructor(private service: TopicServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId']
    this.loadTopic(params['lessonId']);
  }

  loadTopic(lessonId) {
    this.service.findTopicsForLesson(lessonId).then(res => this.topics = res);
  }


  ngOnInit() {
  }

}
