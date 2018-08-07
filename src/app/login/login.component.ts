import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/course.service.client';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String;
  password : String;

  constructor(private userService: UserServiceClient) { }

  logIn = (username, password) => {
    const user = {username: username, password: password};
    this.userService.logIn(user);
  }

  ngOnInit() {
  }

}
