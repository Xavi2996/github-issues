import { Component, inject, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces/github-issue.interface';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-item',
  imports: [NgStyle, RouterLink],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css',
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();
  issueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === 'open';
  }

  prefetchData() {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
