export function getLocation() {
  const [hash] = window.location.hash.split('?');
  const [, location = '/'] = hash.split('#');

  return location;
}

export default getLocation;
