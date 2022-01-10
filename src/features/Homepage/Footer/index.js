import { useWindowWidth } from "../useWindowWidth";
import { email } from "../email";
import { Email, Icons, LetsTalk, Link, Paragraph } from "./styled";
import { ReactComponent as GithubLogo } from "./logos/github_black.svg";
import { ReactComponent as LinkedInLogo } from "./logos/linkedIN_black.svg";
import { ReactComponent as FacebookLogo } from "./logos/facebook_black.svg";

export const Footer = () => {
  const iconSize = useWindowWidth();

  return (
    <>
      <LetsTalk>Let's talk!</LetsTalk>
      <Email href={`mailto:${email}`} title={email}>{email}</Email>
      <Paragraph>
        I'm always open to new challenges. If you have a website in mind and need some help to make your ideas come to life, feel free to contact me 😁
      </Paragraph>
      <Icons>
        <Link href="https://github.com/olachrzan" target="_blank" rel="noreferrer noopener">
          <GithubLogo width={iconSize()} height={iconSize()} />
        </Link>
        <Link href="https://linkedin.com/in/olachrzan" target="_blank" rel="noreferrer noopener">
          <LinkedInLogo width={iconSize()} height={iconSize()} />
        </Link>
        <Link href="https://facebook.com/ola.chrzan.79" target="_blank" rel="noreferrer noopener">
          <FacebookLogo width={iconSize()} height={iconSize()} />
        </Link>
      </Icons>
    </>
  )
}