import {Injectable} from '@angular/core';

@Injectable()
export class  LessonServiceClient {
  java_conn = 'http://localhost:8080';

  findAllLessons() {
    return fetch(this.java_conn + '/api/lesson/', {
        method: 'GET',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findLessonsForModule(moduleId) {
    return fetch(this.java_conn + '/api/module/' + moduleId + '/lesson', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findLessonById(lessonId) {
    return fetch(this.java_conn + '/api/lesson/' + lessonId, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }
}
