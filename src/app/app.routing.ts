import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {AdminComponent} from './admin-homepage/admin.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseListComponent} from './course-list/course-list.component';

const appRoutes: Routes = [
  {path: 'courses',  component:    CourseListComponent},
  {path: 'login',    component:    LoginComponent},
  {path: 'register', component:    RegisterComponent},
  {path: 'profile',  component:    ProfileComponent},
  {path: 'course/:courseId/section', component:    SectionsComponent},
  {path: 'enrollment', component:  EnrollmentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent}
];



export const routing = RouterModule.forRoot(appRoutes);
