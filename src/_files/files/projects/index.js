import jiraGitHooks from './jira-git-hooks';
import createReactPackageLib from './create-react-package-lib';

export default [
  'Projects',
  (new Map([
    jiraGitHooks,
    createReactPackageLib,
  ])),
];
