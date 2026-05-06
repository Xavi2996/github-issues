import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces/github-label.interface';
import { NgStyle } from '@angular/common';
import { IsuuesService } from '../../services/isuues.service';

@Component({
  selector: 'app-labels-selector',
  imports: [NgStyle],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css',
})
export class LabelsSelectorComponent {
  issuesService = inject(IsuuesService);

  labels = input.required<GitHubLabel[]>();

  isSelected(labelName: string) {
    return this.issuesService.selectedLables().has(labelName);
  }

  onToggleLabel(label: string) {
    this.issuesService.toogleLabel(label);
  }
}
