/* eslint-disable max-len */
import parseToCodelines from '#/utils/parseToCodelines';

const name = 'contact.css';
const content = parseToCodelines(`
$(green, .linked-in) {
  $(blue, url): $["https://www.linkedin.com/in/jrobcc", https://www.linkedin.com/in/jrobcc, yellow]
}

$(green, .github) {
  $(blue, url): $["https://github.com/RobCC", https://github.com/RobCC, yellow]
}

$(green, .facebook) {
  $(blue, url): $["https://www.facebook.com/jrobcc", https://www.facebook.com/jrobcc, yellow]
}

$(green, .email) {
  $(blue, url): $["Click here to send an email!", https://mail.google.com/mail/?view=cm&fs=1&to=rrc0138@gmail.com", yellow]
}
`);

export default [
  name,
  content,
];
