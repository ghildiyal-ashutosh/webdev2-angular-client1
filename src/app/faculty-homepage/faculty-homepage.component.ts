import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {UserServiceClient} from '../../services/user.service.client';
import {isBoolean} from 'util';

@Component({
  selector: 'app-faculty-homepage',
  templateUrl: './faculty-homepage.component.html',
  styleUrls: ['./faculty-homepage.component.css']
})
export class FacultyHomepageComponent implements OnInit {

  courses = [];

  faculty = {username: ''};

  facultyStatus = true;

  selectedCourse = {id: -1, module: [], title : '' };

  modules = [];
  selectedModule = {id: -1, lessons: [] , title: '' };

  lessons = [];
  selectedLesson = {widgets: [], title: '', id: -1};

  selectedWidgets = [{visibility: isBoolean() , id: ''}] ;
  selectedWidget = {visibility: isBoolean()};
  moduleStatus = false;
  lessonStatus = false;
  widgetStatus = false;



  constructor(private courseService: CourseServiceClient,
              private userService: UserServiceClient) { }


  selectCourse(course) {
    this.selectedCourse  = course;
    this.modules = this.selectedCourse.module;
    this.moduleStatus = true;

  }


  selectModule(module) {
    this.selectedModule = module;

    this.lessonStatus = true;
    this.lessons = this.selectedModule.lessons;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;


    this.widgetStatus = true;
    this.selectedWidgets = this.selectedLesson.widgets;

    console.log(this.selectedWidgets);

  }

  selectWidget(widget) {
    const status = widget.visibility;
    this.selectedWidget = widget;
    this.selectedWidget.visibility = !status;
    }

  changeWidgetStatus(widgets) {
    this.selectedWidgets = widgets;

    this.courseService.updateVisibility(this.selectedCourse.id,
                                        this.selectedModule.id,
                                          this.selectedLesson.id,
                                             this.selectedWidgets).
                                               then((response) => {
                                alert('Visibility Status of Widgets successfully updated') ;
                              });
  }

  ngOnInit() {

    this.userService
      .currentUser()
      .then(user => {
        if (user !== null ) {
          this.facultyStatus = false;
          this.faculty = user;
          this.courseService
            .findAllCourses()
            .then((courses) => this.courses = courses);
        }
        else {
          alert('Admin Rights Revoked');
        }
      });

  }

}
