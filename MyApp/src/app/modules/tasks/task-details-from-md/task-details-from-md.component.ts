

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_USERS, User } from '../../../models/user.model';
import { Priority, Task } from '../task.model'

@Component({
  selector: 'app-task-details-from-md',
  templateUrl: './task-details-from-md.component.html',
  styleUrls: ['./task-details-from-md.component.css']
})
export class TaskDetailsFromMDComponent implements OnInit {


  usersList: User[] = APP_USERS;

  priorityType = Priority;

  private _task: Task;

  public get task(): Task {
    return this._task;
  }

  @Input()
  public set task(value: Task) {
    if (value != null) {
      this._task = value;
      if (this._task != undefined) {
        this.taskForm = new FormGroup({
          "id": new FormControl(this.task.id),
          "name": new FormControl(this.task.name, [Validators.required, Validators.minLength(3)]),
          "description": new FormControl(this._task.description, Validators.required),
          "userId": new FormControl(this.task.userId, Validators.required),
          "priority": new FormControl(this.task.priority),
          "address": new FormGroup({
            "cityId": new FormControl(),
            "street": new FormControl()
          })
        });
      }
    }
  }

  taskForm: FormGroup;


  @Output()
  onSaveTask: EventEmitter<any> = new EventEmitter();

  saveNewTask() {
    // this.task?.name = this.taskForm.controls["name"].value;
    // this.task?.description = this.taskForm.controls["description"].value;
    this.task = this.taskForm.value;
    this.onSaveTask.emit(this._task);
  }

  @Output()
  onFirstFocus: EventEmitter<any> = new EventEmitter();

  fistFocusEmited: boolean = false;

  inputFocus() {
    if (!this.fistFocusEmited) {
      this.fistFocusEmited = true
    }
    this.onFirstFocus.emit()
  }

  ngOnInit(): void {
  }

}

