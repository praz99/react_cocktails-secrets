import React from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  background: #071024;
  color: #cbd5e1;
  font-size: 0.9rem;
`;

const Name = styled.span`
  color: #fff;
  margin-left: 0.3rem;
  font-weight: 600;
`;

const IconLink = styled.a`
  color: #cbd5e1;
  margin-left: 0.6rem;
  text-decoration: none;
`;

const Footer = () => (
  <FooterBar>
    <div>
      <span>Developed by</span>
      <Name> Prajwal Thapa</Name>
    </div>
    <div>
      <IconLink
        aria-label="github link"
        href="https://github.com/praz99"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </IconLink>
      <IconLink
        aria-label="linked-in link"
        href="https://linkedin.com/in/prazwal-thapa"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </IconLink>
      <IconLink
        aria-label="twitter link"
        href="https://twitter.com/thapa_praz"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </IconLink>
    </div>
  </FooterBar>
);

export default Footer;
