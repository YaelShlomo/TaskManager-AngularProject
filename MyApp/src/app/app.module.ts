import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./life-cycle-demo/child-life/child-life.component";
import { FormsModule } from "@angular/forms";
import { TasksModule } from "./modules/tasks/tasks.module";
import { AppRoutingModule } from "./app-routing.module";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [AppComponent, ParentLifeComponent,
        ChildLifeComponent, UsersComponent, HomeComponent],
    imports: [BrowserModule, FormsModule, TasksModule, AppRoutingModule],
    bootstrap: [AppComponent],

})

export class AppModule {

};