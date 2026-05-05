import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces/github-issue.interface';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-issue-coment',
  imports: [MarkdownModule],
  templateUrl: './issue-coment.component.html',
  styleUrl: './issue-coment.component.css',
})
export class IssueComentComponent {
  issue = input.required<GitHubIssue>();
}
