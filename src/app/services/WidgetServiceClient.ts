import {Injectable} from '@angular/core';

@Injectable()
export class  WidgetServiceClient {
  java_conn = 'http://localhost:8080';

  findAllWidgets() {
    return fetch(this.java_conn + '/api/widget', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findWidgetsForTopic(topicId) {
    return fetch(this.java_conn + '/api/topic/' + topicId + '/widget', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }

  findWidgetById(widgetId) {
    return fetch(this.java_conn + '/api/widget/' + widgetId, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}}).then(res => res.json());
  }
}
