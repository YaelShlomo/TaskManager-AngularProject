import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await-demo',
  templateUrl: './async-await-demo.component.html',
  styleUrls: ['./async-await-demo.component.css']
})
export class AsyncAwaitDemoComponent implements OnInit {

  async printNumbers() {
    console.log("1");
    //console.log("2");
    // this.getNumbers().then(num => {
    //   console.log(num);
    // })
    var x = await this.getNumbers();
    console.log(x);
    console.log("3");
  }

  getNumbers(): Promise<number> {
     return new Promise<number>(res => {
       setTimeout(() => {
         res(2);
       }, 3000)
     })
  }

  constructor() {
    console.log("Befor call printNumbers");
    this.printNumbers();
    console.log("After call printNumbers");
   }

  ngOnInit(): void {
  }

}
