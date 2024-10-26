import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core";
import { FilterWordService } from "../../../core/services/filter-word.service";
import { Observable, Subscription } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-repo-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./repo-list.component.html",
  styleUrl: "./repo-list.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoListComponent implements OnInit {
  filterService = inject(FilterWordService);
  repoList$: Observable<string> | undefined;

  ngOnInit(): void {
    this.repoList$ = this.filterService.getFilterWord();
  }
}
