import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {SectionServiceClient} from '../../services/section.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  selectedCourse = {};
  courseId = '';
  sections = [];
  courses = [];
  selectedSection = {};

  constructor( private courseService: CourseServiceClient,
                private sectionService: SectionServiceClient) { }


  selectCourse (course) {

    this.selectedCourse = course;
    this.courseId = course.id;

    this.sectionService
      .findSectionsForCourse(this.courseId)
      .then(sections => this.sections = sections)
  }

  selectSection(section)
  {
    this.selectedSection = section;
  }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then((courses) => this.courses = courses)
  }

}
