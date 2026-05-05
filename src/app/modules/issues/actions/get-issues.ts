import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue } from '../interfaces/github-issue.interface';
import { GitHubLabel } from '../interfaces/github-label.interface';

export const getIssues = async (): Promise<GitHubIssue[]> => {
  const BASE_URL = environment.baseUrl;
  const GITHUB_TOKEN = environment.githubToken;

  await sleep(1500);
  try {
    const resp = await fetch(`${BASE_URL}/issues`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw 'Error fetching issues';

    const issues: GitHubIssue[] = await resp.json();

    console.log(issues);

    return issues;
  } catch (error) {
    throw 'Cant load issues';
  }
};
