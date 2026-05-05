import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/internal/operators/tap';
import { IssueService } from '../../services/issue.service';
import { IssueComentComponent } from '../../components/issue-coment/issue-coment.component';

@Component({
  selector: 'app-issues-page',
  imports: [RouterLink, IssueComentComponent],
  templateUrl: './issues-page.component.html',
  styleUrl: './issues-page.component.css',
})
export default class IssuesPageComponent {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((isNumber) => this.issueService.setIssueNumber(isNumber)),
    ),
  );

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
}
