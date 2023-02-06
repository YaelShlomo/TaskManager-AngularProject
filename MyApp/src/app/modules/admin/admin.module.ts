import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';
import { AdminRouting } from './admin-routing.module';



@NgModule({
  declarations: [
    ManageUsersComponent,
    ManageTasksComponent
  ],
  imports: [
    CommonModule, AdminRouting
  ]
})
export class AdminModule { }
