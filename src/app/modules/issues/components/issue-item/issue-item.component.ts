import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces/github-issue.interface';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-issue-item',
  imports: [NgStyle, RouterLink],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css',
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === 'open';
  }
}
