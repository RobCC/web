import { createCodeText } from '#/utils/codeParser';
import { fileUtils } from '#/utils/directory';

const name = 'contact.css';
const content = createCodeText(`
$(.linked-in, green) $({, yellow)
  $(url, blue): $["https://www.linkedin.com/in/jrobcc", https://www.linkedin.com/in/jrobcc, string]
$(}, yellow)

$(.github, green) $({, yellow)
  $(url, blue): $["https://github.com/RobCC", https://github.com/RobCC, string]
$(}, yellow)

$(.facebook, green) $({, yellow)
  $(url, blue): $["https://www.facebook.com/jrobcc", https://www.facebook.com/jrobcc, string]
$(}, yellow)

$(.email, green) $({, yellow)
  $(url, blue): $["Click here to send an email!", https://mail.google.com/mail/?view=cm&fs=1&to=rrc0138@gmail.com", string]
$(}, yellow)
`);

export default fileUtils.create(name, content);
