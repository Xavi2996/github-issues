import { Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces/github-label.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-labels-selector',
  imports: [NgStyle],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css',
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();
}
