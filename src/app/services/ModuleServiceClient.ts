import {Injectable} from '@angular/core';

@Injectable()
export class  ModuleServiceClient {
  java_conn = 'http://localhost:8080';

  findAllModules() {
    return fetch(this.java_conn + '/api/module', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findModulesForCourse(courseId) {
    return fetch(this.java_conn + '/api/course/' + courseId + '/module', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findModuleById(moduleId) {
    return fetch(this.java_conn + '/api/module/' + moduleId, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }
}
