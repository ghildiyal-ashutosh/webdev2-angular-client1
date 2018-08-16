import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {AdminComponent} from './admin-homepage/admin.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseListComponent} from './course-list/course-list.component';
import {FacultyHomepageComponent} from './faculty-homepage/faculty-homepage.component';

const appRoutes: Routes = [
  {path: 'courses',  component:    CourseListComponent},
  {path: 'login',    component:    LoginComponent},
  {path: 'register', component:    RegisterComponent},
  {path: 'profile',  component:    ProfileComponent},
  {path: 'course/:courseId/section', component:    SectionsComponent},
  {path: 'enrollment', component:  EnrollmentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch : 'full'},
  {path: 'home' , component:  WhiteBoardComponent},
  {path: 'faculty', component: FacultyHomepageComponent},
  {path: '**', component: WhiteBoardComponent}
];



export const routing = RouterModule.forRoot(appRoutes);
