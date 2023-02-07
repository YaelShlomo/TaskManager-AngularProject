import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { TaskListComponent } from "./modules/tasks/task-list/task-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UsersComponent } from "./users/users.component";

const APP_ROUTES: Route[] = [
    {path: "", redirectTo: "home", pathMatch:"full"},
    // {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "tasks", component: TaskListComponent},
    {path: "tasks/:id", component: TaskListComponent},
    {path: "users", component: UsersComponent, canActivate:[AuthGuardService]},
    {path: "admin", loadChildren:()=>import("./modules/admin/admin.module").then(m=>m.AdminModule)},
    {path: "demo", loadChildren:()=>import("./modules/demo/demo.module").then(m=>m.DemoModule)},
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}