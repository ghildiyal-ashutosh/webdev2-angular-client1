import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {SectionServiceClient} from '../../services/section.service.client';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses =  [] ;
  sections = [];
   section = {};
  selectedCourse = {};
  selectedSection = {};
  id = -1;

  constructor(private sectionService: SectionServiceClient,
               private courseService: CourseServiceClient) {}


  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionService.findSectionsForCourse(this.selectedCourse.id)
      .then(sections => this.sections = sections);

  }
  addSection(section) {
    section.courseId = this.selectedCourse.id;

    this.sectionService
      .createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse((this.selectedCourse.id))
      })
      .then(sections => this.sections = sections)}

  selectSection(section) {
    this.selectedSection = section;

  }
  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
