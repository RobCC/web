/* eslint-disable max-len */
import parseToCodelines from '#/utils/parseToCodelines';

const name = 'contact.css';
const content = parseToCodelines(`
$(green, .linked-in) $(yellow, {)
  $(blue, url): $["https://www.linkedin.com/in/jrobcc", https://www.linkedin.com/in/jrobcc, string]
$(yellow, })

$(green, .github) $(yellow, {)
  $(blue, url): $["https://github.com/RobCC", https://github.com/RobCC, string]
$(yellow, })

$(green, .facebook) $(yellow, {)
  $(blue, url): $["https://www.facebook.com/jrobcc", https://www.facebook.com/jrobcc, string]
$(yellow, })

$(green, .email) $(yellow, {)
  $(blue, url): $["Click here to send an email!", https://mail.google.com/mail/?view=cm&fs=1&to=rrc0138@gmail.com", string]
$(yellow, })
`);

export default [
  name,
  content,
];
