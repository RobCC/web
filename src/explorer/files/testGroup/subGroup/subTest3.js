import parseToCodelines from '#/utils/parseToCodelines';

const name = 'subtest3.json';
const content = parseToCodelines(`
Test 33
`);

export default [name, content];
