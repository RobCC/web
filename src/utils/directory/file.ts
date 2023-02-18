export function create(name: string, content: FileContent): AppFile2 {
  return {
    type: 'file',
    name,
    content,
  };
}

export default {
  create,
};
