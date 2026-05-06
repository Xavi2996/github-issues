import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue, State } from '../interfaces/github-issue.interface';
import { GitHubLabel } from '../interfaces/github-label.interface';

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[] = [],
): Promise<GitHubIssue[]> => {
  const BASE_URL = environment.baseUrl;
  const GITHUB_TOKEN = environment.githubToken;

  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(`${BASE_URL}/issues?${params.toString()}`, {
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
