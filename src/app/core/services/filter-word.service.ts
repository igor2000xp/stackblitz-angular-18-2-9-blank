import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterWordService {
  private filterWordSub = new BehaviorSubject("init");
  filterWord$: Observable<string> = this.filterWordSub.asObservable();

  setFilterWords(word: string) {
    this.filterWordSub.next(word);
  }

  getFilterWord(): Observable<string> {
    return this.filterWord$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      filter((item) => item.length > 2)
    );
  }
}
