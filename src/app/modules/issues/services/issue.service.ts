import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/get-issue-by-number';
import { getIssueComentsByNumber } from '../actions/get-issue-coment-by-number';
import { GitHubIssue } from '../interfaces/github-issue.interface';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private queryClient = inject(QueryClient); //es el cliente que se inyecto en los providers

  private issueNumber = signal<string | null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null, //para que no se dipare mientras no tenemos un numero de issue
    staleTime: 1000 * 60 * 5, //5 minutos
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null, //para que no se dipare mientras no tenemos un numero de issue
  }));

  setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }

  //se la va a usar para cargar la informacion en un moento especifico por ejemplo al pasar el mouse para tener pre cargado
  prefetchIssue(issueId: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueId],
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5, //5 minutos
    });
  }

  setIssueData(issue: GitHubIssue) {
    this.queryClient.setQueryData(['issue', issue.number.toString()], issue, {
      updatedAt: Date.now() + 1000 * 60 * 1, //1 minuto
    });
  }
}
