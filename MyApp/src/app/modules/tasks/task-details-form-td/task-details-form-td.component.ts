import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model'

@Component({
  selector: 'task-details-form-td',
  templateUrl: './task-details-form-td.component.html',
  styleUrls: ['./task-details-form-td.component.css']
})
export class TaskDetailsFormTDComponent implements OnInit {

  constructor() { }

  @Input()
  task: Task | null;

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
