const SECTION_API_URL = 'http://localhost:3000/api'

import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {
  createSection(section) {
   return fetch ((SECTION_API_URL + '/section'), {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers:
        {'Content-Type' : 'application/json'}
    }).then(function (response) {
      return response.json();

    });
  }


  findSectionsForCourse(courseId) {
    return fetch ((SECTION_API_URL + '/course/' + courseId + '/section'), {
      credentials: 'include'
    }).then(function (response) {
        return response.json();
      });
  }
}
