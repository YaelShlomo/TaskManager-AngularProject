import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageTasksComponent } from "./manage-tasks/manage-tasks.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";

const ADMIN_ROUTES: Routes = [
    { path: '', redirectTo:"manageTasks", pathMatch:"full"},
    { path: 'manageTasks', component: ManageTasksComponent},
    { path: 'manageUsers', component: ManageUsersComponent}

]

@NgModule({
    imports: [RouterModule.forChild(ADMIN_ROUTES)],
    exports: [RouterModule]
})

export class AdminRouting {

}