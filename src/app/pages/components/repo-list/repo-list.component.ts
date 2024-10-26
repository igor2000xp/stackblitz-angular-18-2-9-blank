import { Component, inject } from "@angular/core";
import { FilterWordService } from "../../../core/services/filter-word.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-repo-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./repo-list.component.html",
  styleUrl: "./repo-list.component.css",
})
export class RepoListComponent {
  filterWordService = inject(FilterWordService);
  filterWord$ = this.filterWordService.getFilterWord();
}
