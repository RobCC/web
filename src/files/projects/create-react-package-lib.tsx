import ProjectReadme from '#/components/ProjectReadme/ProjectReadme';
import { fileUtils } from '#/utils/directory';

const name = 'create-react-package-lib';

function Component() {
  return <ProjectReadme name={name} />;
}

export default fileUtils.create(`${name}.js`, Component);
