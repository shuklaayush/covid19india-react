import '../styles/footer.scss';

import {memo} from 'react';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/covid19india/covid19india-react"
        className="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>

      <a
        className="api"
        href="https://api.covid19india.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Database />
      </a>

      <a
        href="https://t.me/covid19indiaorg"
        className="telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Send />
      </a>

      <a
        href="https://twitter.com/covid19indiaorg"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
      >
        <Twitter />
      </a>

      <a
        href="mailto:hello@covid19india.org"
        className="mail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail />
      </a>
    </footer>
  );
}

export default memo(Footer);
