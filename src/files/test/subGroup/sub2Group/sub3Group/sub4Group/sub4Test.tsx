import { fileUtils } from '#/utils/directory';

const name = 'sub4Test.json';

function Content() {
  return <div>Not on editor</div>;
}

export default fileUtils.create(name, Content);
