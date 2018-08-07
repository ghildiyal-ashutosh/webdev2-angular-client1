import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';

const appRoutes: Routes = [
  {path: 'courses', component: CourseNavigatorComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
