import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of, switchMap } from "rxjs";
import { environment } from "../../../environments/environment";
import { RepoInterface } from "../models/repo-model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  http = inject(HttpClient);

  // getReps(user: string): Observable<string[]> {
  //   return this.http
  //     .get<RepoInterface[]>(
  //       `${environment.API_URL}${user}${environment.API_REPOS}`
  //     )
  //     .pipe(
  //       map((item) => {
  //         const name: string[] = item.map((itemN) => itemN.name);
  //         return name;
  //       }),
  //       catchError((err) => {
  //         console.error("Error fetching repos:", err);
  //         return of([]); // Return an empty array as a fallback
  //       })
  //     );
  // }
  getRepsObs(user$: Observable<string>): Observable<string[]> {
    return user$.pipe(
      switchMap((user) => {
        return this.http
          .get<RepoInterface[]>(
            `${environment.API_URL}${user}${environment.API_REPOS}`
          )
          .pipe(
            map((item) => {
              const name = item.map((itemN) => itemN.name);
              return name;
            }),
            catchError((err) => {
              console.error("Error is caught, fetching report:", err);
              return of([]); // Return an empty array as a fallback
            })
          );
      })
    );
  }
}
