import { createFile } from '#/utils/explorer';

const name = 'sub5Test.json';

function Content() {
  return <div>Not on editor 5</div>;
}

export default createFile(name, Content);
