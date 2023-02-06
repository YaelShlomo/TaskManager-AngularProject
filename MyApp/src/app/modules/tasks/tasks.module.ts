import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TaskDetailsFormTDComponent } from "./task-details-form-td/task-details-form-td.component";
import { TaskDetailsFromMDComponent } from "./task-details-from-md/task-details-from-md.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskService } from "./task.service";

@NgModule({
    declarations: [TaskListComponent, TaskDetailsComponent, TaskDetailsFormTDComponent,
        TaskDetailsFromMDComponent],
    imports: [CommonModule ,BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
    providers: [TaskService],
    exports: [TaskListComponent]
})
export class TasksModule {

}