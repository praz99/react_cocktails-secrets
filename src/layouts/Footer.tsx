import React from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  background: ${({ theme }) => theme.colors.glassBg};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(8px);
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const Dev = styled.span`color: ${({ theme }) => theme.colors.text}; font-weight: 600;`;

const Social = styled.div`display: flex; gap: 0.75rem;`;

const SLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.muted};
  transition: all ${({ theme }) => theme.transitions.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentGlow};
    transform: translateY(-1px);
  }
  svg { width: 18px; height: 18px; fill: currentColor; }
`;

const GitHubIcon = () => (<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02 0 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.23 2.87.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.2.69.8.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>);
const LinkedInIcon = () => (<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 01-2.06-2.06 2.06 2.06 0 112.06 2.06zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01z"/></svg>);
const TwitterIcon = () => (<svg viewBox="0 0 24 24"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82L4.99 21.75H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l12.1 15.64z"/></svg>);

const Footer = () => (
  <FooterBar>
    <div><span>Developed by</span><Dev> Prajwal Thapa</Dev></div>
    <Social>
      <SLink aria-label="GitHub" href="https://github.com/praz99" target="_blank" rel="noreferrer"><GitHubIcon /></SLink>
      <SLink aria-label="LinkedIn" href="https://linkedin.com/in/prazwal-thapa" target="_blank" rel="noreferrer"><LinkedInIcon /></SLink>
      <SLink aria-label="Twitter" href="https://twitter.com/thapa_praz" target="_blank" rel="noreferrer"><TwitterIcon /></SLink>
    </Social>
  </FooterBar>
);

export default Footer;
