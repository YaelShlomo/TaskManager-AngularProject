import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
})
export class ObservableDemoComponent implements OnInit {

  source: Observable<number> = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
    }, 3000);
    setTimeout(() => {
      observer.next(5);
    }, 1000);
    //observer.complete(); //אם נפעיל שורה זו לא יודפסו 4,5
    observer.error("Error from observerable"); //כנ"ל
  });

  x: number;

  timerValue: string;

  // timer: Observable<Date> = new Observable( obs => {
  //   setInterval(() => {
  //     obs.next(new Date())
  //   },1000)
  // })
  //יש אפשרות לכתוב בצורה כזו, אבל ודאי עדיף להשתמש ב
  //timerByOpertor שמשתמש בoperator interval ועושה את הכתיבה הרבה יותר יפה ופשוטה

  timerByOperator: Observable<Date> = interval(1000).pipe(map(x => {return new Date()}))

  constructor() {
    this.source.pipe( map ( x => { return x * 3; }), filter( x => { return x % 2 == 0; })).subscribe(
      (value) => { //כאן כותבים מה יקרה כאשר יגיע מידע חדש
        this.x = value;
        console.log("Observable next is:" + value);
      },
      (err) => {
        console.log("Error from observerable" + err);
      },
      () => {
        this.x = 0;
        console.log("Observable is completed!")
      });

    // this.timer.subscribe((val) => {
    //   this.timerValue = val.toLocaleTimeString();
    // })

     this.timerByOperator.subscribe((val) => {
       this.timerValue = val.toLocaleTimeString();
     })
  }

  ngOnInit(): void {
  }

}
