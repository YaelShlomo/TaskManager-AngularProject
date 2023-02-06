import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model'

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  task: Task;

  @Output()
  onSaveNewTask: EventEmitter<any> = new EventEmitter();

  saveNewTask() {
    this.onSaveNewTask.emit(this.task);
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
