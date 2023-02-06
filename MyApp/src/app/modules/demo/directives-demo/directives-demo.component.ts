import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  x:string = "a";

  tasks:string[] = ["task1", "task2", "task3", "task4", "task5"];

  constructor() { }

  ngOnInit(): void {
  }

}
