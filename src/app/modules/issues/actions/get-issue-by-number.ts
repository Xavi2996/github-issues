import { environment } from '../../../../environments/environment.development';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue } from '../interfaces/github-issue.interface';

export const getIssueByNumber = async (
  issueNumber: string,
): Promise<GitHubIssue> => {
  const BASE_URL = environment.baseUrl;
  const GITHUB_TOKEN = environment.githubToken;

  await sleep(1500);
  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw 'Error fetching issues';

    const issue: GitHubIssue = await resp.json();

    console.log(issue);

    return issue;
  } catch (error) {
    throw 'Cant load issues';
  }
};
