const fetchReadme = (projectName, userName = 'RobCC') => {
  const readmeUrl = `https://raw.githubusercontent.com/${userName}/${projectName}/master/README.md`;

  return fetch(readmeUrl).then((response) => {
    if (response.ok) {
      return response.text();
    }

    return Promise.reject();
  }).catch((error) => error);
};

export default fetchReadme;
