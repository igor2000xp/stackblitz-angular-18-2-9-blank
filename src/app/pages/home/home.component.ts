import { Component, OnDestroy } from "@angular/core";
import {
  Observable,
  Subscription,
  concatMap,
  delay,
  map,
  mergeMap,
  switchMap,
  tap,
  timeout,
  timer,
} from "rxjs";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnDestroy {
  marbleObservable$ = new Observable<string>((subscriber) => {
    subscriber.next("A");
    setTimeout(() => {
      subscriber.next("B");
    }, 100);
    setTimeout(() => {
      subscriber.next("C");
    }, 100);
  });

  marbleObservableChild$ = new Observable<string>((subscriber) => {
    setTimeout(() => {
      subscriber.next("1");
    }, 2000);
    setTimeout(() => {
      subscriber.next("2");
    }, 3000);
    setTimeout(() => {
      subscriber.next("3");
    }, 4000);
  });
  count = 0;
  m = "";

  sub = new Subscription();

  constructor() {
    this.marbleObservable$
      .pipe(
        mergeMap((parentValue) => {
          return this.marbleObservableChild$.pipe(
            map((childValue) => parentValue + childValue) // Concatenate parent and child values
          );
        })
      )
      .subscribe((child) => console.log(child));
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    this.sub.unsubscribe();
  }
}
