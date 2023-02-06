import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Priority, Task } from '../task.model';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: []
})
export class TaskListComponent implements OnInit {

  priority = Priority;

  // tasks: Task[] = [
  //   { id: 1, name: 'task1', description: "task1 description", done:true },
  //   { id: 2, name: 'task2', done: false, priority: Priority.High},
  //   { id: 3, name: 'task3', done: true},
  // ];

  tasks: Task[];

  selectedTask: Task;

  deleteTask(task: Task) {
    let indexToDelete = this.tasks.indexOf(task);
    this.tasks.splice(indexToDelete, 1);
  }

  showNewTaskDetails() {
    console.log("showNewTaskDetails")
    this.selectedTask = new Task();
  }

  addNewTaskToList(taskToAdd: Task) {
    console.log("addNewTaskToList")
    this.tasks.push(taskToAdd);
    //this.selectedTask = null;
  }

  saveTaskToList(taskToSave: Task) {
    console.log(JSON.stringify(taskToSave));
    console.log("saveTaskToList");
    if (taskToSave.id == 0) {
      taskToSave.id = this.tasks.length + 1;
      this.tasks.push(taskToSave);
    }
    else {
      let taskToUpdate = this.tasks.filter(x => x.id == taskToSave.id)[0];
      let index = this.tasks.indexOf(taskToUpdate);
      this.tasks[index] = taskToSave;
    }
    //this.selectedTask.name="";
    //this.selectedTask.description="";
    //this.selectedTask.id=0;
    //this.selectedTask = null;
  }


  showHelp() {
    alert("Do you need help?");
  }

  showAdv() {
    // alert("adv"); 
  }

  btnClick(e: any) {

  }

  search(str: string) {
  }

  showDetails(taskToShow: Task) {
    this.selectedTask = taskToShow;
  }

  showTasksByDone(done: boolean) {
    this._taskService.getTasksFromServerByDone(done).subscribe(data => {
      this.tasks = data;
    })
  }

  saveTaskToServer() {
    this._taskService.saveTasks(this.tasks).subscribe(data => {
      if (data)
        alert("Task saved successfully");
      else
        alert("Task failed");
    },
      err => {
        alert(err);
      });
  }

  constructor(private _taskService: TaskService, private _acr: ActivatedRoute) {
    // _taskService.getTasksSlowly().then(data => {
    //   this.tasks = data;
    // })

    // _taskService.getTasksFromServer().subscribe(data =>{
    //   this.tasks = data;
    // })
  }

  userId?: number;

  ngOnInit(): void {
    this._acr.paramMap.subscribe(paramMap => {
      if (paramMap.has("id")) {
        this.userId = +paramMap.get("id")!;
      }
    })


    this._taskService.getTasksFromServer().subscribe(data => {
      if(this.userId) {
        this.tasks = data.filter(x => x.userId == this.userId)
      }
      else {
        this.tasks = data;
      }
    })
  }

}
