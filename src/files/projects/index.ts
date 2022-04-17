import { createFolderAndContent } from '#/utils/explorer';
import jiraGitHooks from './jira-git-hooks';
import createReactPackageLib from './create-react-package-lib';

export default createFolderAndContent(
  'Projects',
  jiraGitHooks,
  createReactPackageLib,
);
