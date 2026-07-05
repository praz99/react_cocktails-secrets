import { Dev, FooterBar, SLink, Social } from "./styles";

import GitHubIcon from "../../assets/icons/github.svg?react";
import LinkedInIcon from "../../assets/icons/linkedIn.svg?react";
import TwitterIcon from "../../assets/icons/x.svg?react";

const Footer = () => (
  <FooterBar>
    <div>
      <span>Developed by</span>
      <Dev> Prajwal Thapa</Dev>
    </div>
    <Social>
      <SLink
        aria-label="GitHub"
        href="https://github.com/praz99"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </SLink>
      <SLink
        aria-label="LinkedIn"
        href="https://linkedin.com/in/prazwal-thapa"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </SLink>
      <SLink
        aria-label="Twitter"
        href="https://twitter.com/thapa_praz"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </SLink>
    </Social>
  </FooterBar>
);

export default Footer;
