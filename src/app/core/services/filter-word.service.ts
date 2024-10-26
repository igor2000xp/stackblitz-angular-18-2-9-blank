import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterWordService {
  private filterWordSubj = new BehaviorSubject("");
  filterWord$ = this.filterWordSubj.asObservable();

  getFilterWord(): Observable<string> {
    return this.filterWord$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      filter((word) => word.length > 3)
    );
  }

  setFilterWord(word: string): void {
    this.filterWordSubj.next(word);
  }
}
