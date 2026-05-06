import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getLabels } from '../actions/get-labels';
import { getIssues } from '../actions/get-issues';
import { State } from '../interfaces/github-issue.interface';

@Injectable({
  providedIn: 'root',
})
export class IsuuesService {
  selectedState = signal<State>(State.All);
  selectedLables = signal(new Set<string>());

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: [
      'issues',
      {
        state: this.selectedState(),
        selectedLabels: [...this.selectedLables()],
      },
    ],
    queryFn: () => getIssues(this.selectedState(), [...this.selectedLables()]),
  }));

  showIssuesByState(state: State) {
    this.selectedState.set(state);
  }

  toogleLabel(label: string) {
    const labels = this.selectedLables();

    if (labels.has(label)) {
      labels.delete(label);
    } else {
      labels.add(label);
    }
    this.selectedLables.set(new Set(labels));
  }
}
