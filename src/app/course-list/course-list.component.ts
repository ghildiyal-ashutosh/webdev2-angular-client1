import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {SectionServiceClient} from '../../services/section.service.client';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [];
  selectedCourse = {id: -1 , module: [], title : '' };

  modules = [];
  selectedModule = {id: '', lessons: [] , title: '' };

  lessons = [];
  selectedLesson = {widgets: [], title: ''};

  widgets = [] ;
  selectedWidget = {};
  moduleStatus = false;
  lessonStatus = false;
  widgetStatus = false;

  contentView =  false;

  enrolledSections = [{ id : -1,  section: {courseId: -1}}] ;




  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) {}

  selectCourse(course) {
    this.selectedCourse  = course;
    this.modules = this.selectedCourse.module;
    this.moduleStatus = true;

    for ( let i = 0; i < this.enrolledSections.length; i++) {

      if (this.selectedCourse.id === this.enrolledSections[i].section.courseId) {
        this.contentView = true;
        break;
      }
      else
        this.contentView = false;
      }

      console.log(this.contentView);

    }


    selectModule(module) {
      this.selectedModule = module;

      this.lessonStatus = true;
      this.lessons = this.selectedModule.lessons;
    }

    selectLesson(lesson) {
      this.selectedLesson = lesson;
      console.log(this.selectedLesson);

      this.widgetStatus = true;
      this.widgets = this.selectedLesson.widgets;

    }

    selectWidget(widget) {
      this.selectedWidget = widget;
      console.log(widget);
    }


  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);

    this.sectionService.findSectionsForStudent().then(response =>
    this.enrolledSections = response);
  }

}
