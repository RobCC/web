import { createFile } from '#/utils/explorer';

const name = 'sub4Test.json';

function Content() {
  return <div>Not on editor</div>;
}

export default createFile(name, Content);
