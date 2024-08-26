import { Routes } from '@angular/router';
import { INTERNAL_PATHS } from '@data/constants/constants';
import { UsersComponent } from '@modules/dashboard/views/users/users.component';
import { TasksComponent } from './views/tasks/tasks.component';

export const dashabordRoutes: Routes = [
  {
    path: INTERNAL_PATHS.PATH_USERS,
    component: UsersComponent,
  },
  {
    path: INTERNAL_PATHS.PATH_TASKS,
    component: TasksComponent,
  },
];
