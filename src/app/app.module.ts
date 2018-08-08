import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from '../services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {routing} from './app.routing';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from '../services/user.service.client';
import { SectionsComponent } from './sections/sections.component';
import {SectionServiceClient} from '../services/section.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserServiceClient,
    CourseServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
