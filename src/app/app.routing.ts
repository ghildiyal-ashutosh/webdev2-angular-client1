import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {AdminComponent} from './admin-homepage/admin.component';

const appRoutes: Routes = [
  {path: 'courses',  component:    CourseNavigatorComponent},
  {path: 'login',    component:    LoginComponent},
  {path: 'register', component:    RegisterComponent},
  {path: 'profile',  component:    ProfileComponent},
  {path: 'course/:courseId/section', component:    SectionsComponent},
  {path: 'enrollment', component:  EnrollmentComponent},
  {path: 'admin', component: AdminComponent}
  ];



export const routing = RouterModule.forRoot(appRoutes);
