import { Component, inject } from "@angular/core";
import { RepoListComponent } from "../components/repo-list/repo-list.component";
import { FilterWordService } from "../../core/services/filter-word.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RepoListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  check = "";
  filterService = inject(FilterWordService);
  // check$: Observable<string> = this.filterService.getFilterWord();

  onInput(event: Event) {
    const check = (event.target as HTMLInputElement).value;
    this.filterService.setFilterWords(check);
  }
}
