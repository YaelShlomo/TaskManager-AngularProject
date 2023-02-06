import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-life',
  templateUrl: './parent-life.component.html',
})
export class ParentLifeComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input()
  x: number = 5;

  constructor() {
    console.log("ParentLifeComponent constructor");
    console.log("x=",this.x);
   }
  ngOnDestroy(): void {
    console.log("ParentLifeComponent destroy");
  }
  ngAfterViewInit() {
    console.log("ParentLifeComponent after children init");
  }

  ngOnInit(): void {
    console.log("ParentLifeComponent ngOnInit");
    console.log("x=",this.x);
  }

  ngOnChanges() {
    console.log("ParentLifeComponent changed");
  }

}
