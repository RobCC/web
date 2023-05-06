import { folderUtils } from '#/utils/directory';

import CreateReactPackage from './create-react-package-lib';
import JiraGitHooks from './jira-git-hooks';

export default folderUtils.create('Projects', [
  CreateReactPackage,
  JiraGitHooks,
]);
