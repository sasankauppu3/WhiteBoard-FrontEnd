import {Injectable} from '@angular/core';

@Injectable()
export class  CourseServiceClient {
  java_conn = 'http://localhost:8080';

  findAllCourses() {
    return fetch(this.java_conn + '/api/course', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findCourseById(courseId) {
    return fetch(this.java_conn + '/api/course/' + courseId, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }
}
