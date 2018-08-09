import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {SectionServiceClient} from '../../services/section.service.client';
import {CourseServiceClient} from '../../services/course.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  user = {};
  _id = -1;
  sections = [];
  courses = [];

  constructor(private userService:    UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService:  CourseServiceClient) { }


              ngOnInit() {
    this.userService
      .currentUser()
      .then((user) => {
        if (user.username !== 'Negative') {
          this._id = user._id;
        }
      }).then(() => {
      if (this._id !== -1) {
        this.sectionService
          .findSectionsForStudent()
          .then(sections => this.sections = sections);

        this.courseService.findAllCourses()
          .then(courses => this.courses = courses);


      }
    });
    }


}
