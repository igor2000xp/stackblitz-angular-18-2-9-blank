import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core";
import { FilterWordService } from "../../../core/services/filter-word.service";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../../core/services/api.service";
import { Observable, Subscription, tap } from "rxjs";

@Component({
  selector: "app-repo-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./repo-list.component.html",
  styleUrl: "./repo-list.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoListComponent {
  filterWordService = inject(FilterWordService);
  api = inject(ApiService);
  filterWord$ = this.filterWordService.getFilterWord();
  repos$: Observable<string[]> = this.api.getRepsObs(this.filterWord$);
  // repos: string[] = [];
  // reposStr: string = "";
}
