import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IsuuesService } from '../../services/isuues.service';

@Component({
  selector: 'app-issues-list-page',
  imports: [RouterLink],
  templateUrl: './issues-list-page.component.html',
  styleUrl: './issues-list-page.component.css',
})
export default class IssuesListPageComponent {
  issuesService = inject(IsuuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
}
