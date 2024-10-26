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
    }, 1150);
    setTimeout(() => {
      subscriber.next("C");
    }, 1300);

    setTimeout(() => {
      subscriber.complete();
    }, 1400);
  });

  marbleObservableChild$ = new Observable<string>((subscriber) => {
    subscriber.next("1");

    setTimeout(() => {
      subscriber.next("2");
    }, 1000);
    setTimeout(() => {
      subscriber.next("3");
    }, 2000);

    setTimeout(() => {
      subscriber.complete();
    }, 3100);
  });
  count = 0;
  m = "";

  sub = new Subscription();

  constructor() {
    this.sub = this.marbleObservableChild$
      .pipe(
        switchMap((parentValue) => {
          return this.marbleObservable$.pipe(
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
