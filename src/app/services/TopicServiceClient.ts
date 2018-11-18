import {Injectable} from '@angular/core';

@Injectable()
export class  TopicServiceClient {
  java_conn = 'http://localhost:8080';

  findAllTopics()	{
    return fetch(this.java_conn + '/api/topic', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findTopicsForLesson(lessonId)	{
    return fetch(this.java_conn + '/api/lesson/' + lessonId + '/topic', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findTopicById(topicId) {
    return fetch(this.java_conn +  '/api/topic/' + topicId, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }
}
