const SECTION_API_URL = 'http://localhost:3000/api';

import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {
  createSection(section) {
    return fetch((SECTION_API_URL + '/course/' + section.courseId + '/section'), {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers:
        {'Content-Type': 'application/json'}
    }).then(function (response) {
      return response.json();

    });
  }

  deleteSection(sectionId) {
    return fetch((SECTION_API_URL + '/section/' + sectionId), {
      method: 'DELETE',
      credentials: 'include'
    }).then(function (response) {
      return response;
    });
  }

  updateSection(section){
    return fetch ((SECTION_API_URL + '/section/' + section.sectionId), {
      credentials: 'include',
      method : 'PUT',
      body : JSON.stringify(section),
      headers:
        {'content-type' : 'application/json'}
    }).then(function (response) {
      return response;
    });
  }

  findSectionsForCourse(courseId) {
    return fetch((SECTION_API_URL + '/course/' + courseId + '/section'),{
      credentials: 'include'
    }).then(function (response) {
      return response.json();
    });
  }

  findAllSections() {
    return fetch((SECTION_API_URL + '/findAllSections'),
      {
        credentials: 'include'
      }).then(function (response) {
      return response.json();
    });

  }

  enrollSection(sectionId) {
    return fetch((SECTION_API_URL + '/section/enroll/' + sectionId), {
      credentials: 'include',
      method: 'PUT'
    }).then(function (response) {
      return response.json();
    });
  }

  unenrollSection(sectionId) {
    return fetch((SECTION_API_URL + '/section/unenroll/' + sectionId), {
      credentials: 'include',
      method: 'delete'
    }).then(response => function (response) {
      return response.json();
    });
  }

  findSectionsForStudent() {
    return fetch ((SECTION_API_URL + '/student/section'), {
      credentials: 'include'
    }).then(function (response) {
      return response.json();
    });
  }
}

