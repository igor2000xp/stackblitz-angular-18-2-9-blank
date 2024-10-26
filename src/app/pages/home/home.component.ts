import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RepoListComponent } from "../components/repo-list/repo-list.component";
import { FilterWordService } from "../../core/services/filter-word.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RepoListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  filterWordService = inject(FilterWordService);

  onInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.filterWordService.setFilterWord(input);
  }
}
