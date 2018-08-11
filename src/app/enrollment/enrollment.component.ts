import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../../services/section.service.client';
import {CourseServiceClient} from '../../services/course.service.client';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  courses = [];
  selectedCourse = {id : ''};
  sections =  [] ;
  selectedSection = {remSeats: '', maxSeats: ''};
  enrollStatus = false;

  sectionStatus = true;
  viewStatus = true;


  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
  }


  selectCourse(course) {
    this.selectedCourse = course;

    this.sectionStatus = false;

    this.sectionService
      .findSectionsForCourse(course.id)
      .then((sections) => this.sections = sections);
  }


  selectSection(section) {

    this.selectedSection = section;

  }


  enrollSection(section) {
    this.selectedSection = section;
    if (this.selectedSection.remSeats < this.selectedSection.maxSeats )  {
      this.sectionService
        .enrollSection(section._id)
        .then((response) => {

          if (response !== null) {
            alert('Enrolled in' + '  ' + section.title);
          }
          else
            alert('You are not logged in');
        });
  }
  else {
      this.enrollStatus = true;
      alert('Course Full cant enroll');
    }
  }

  ngOnInit() {

    this.userService.currentUser()
      .then(user => {
        if (user !== null) {
          this.viewStatus = false;
        }
      });

    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }
}
