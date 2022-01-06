import { email } from "../email";
import { Email, Icons, LetsTalk, Link, Paragraph, Wrapper } from "./styled";
import { ReactComponent as GithubLogo } from "./logos/github_black.svg";
import { ReactComponent as LinkedInLogo } from "./logos/linkedIN_black.svg";
import { ReactComponent as FacebookLogo } from "./logos/facebook_black.svg";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Email href={`mailto:${email}`} title={email}>{email}</Email>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat, repudiandae magnam quo quia repellendus enim sed saepe consequatur, repellat eligendi nostrum illum aliquam nam ipsum nesciunt minima incidunt architecto!
    </Paragraph>
    <Icons>
      <Link href="https://github.com/olachrzan" target="_blank" rel="noreferrer noopener">
        <GithubLogo />
      </Link>
      <Link href="https://linkedin.com/in/olachrzan" target="_blank" rel="noreferrer noopener">
        <LinkedInLogo />
      </Link>
      <Link href="https://facebook.com/ola.chrzan.79" target="_blank" rel="noreferrer noopener">
        <FacebookLogo />
      </Link>
    </Icons>
  </Wrapper>
)