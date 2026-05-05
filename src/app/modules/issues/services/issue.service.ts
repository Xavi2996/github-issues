import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/get-issue-by-number';
import { getIssueComentsByNumber } from '../actions/get-issue-coment-by-number';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null, //para que no se dipare mientras no tenemos un numero de issue
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null, //para que no se dipare mientras no tenemos un numero de issue
  }));

  setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }
}
