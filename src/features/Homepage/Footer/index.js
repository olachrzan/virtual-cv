import { email } from "../email";
import { Email, FacebookLogo, GithubLogo, Icons, LetsTalk, Link, LinkedInLogo, Paragraph } from "./styled";

export const Footer = () => {

  return (
    <>
      <LetsTalk>Let's talk!</LetsTalk>
      <Email href={`mailto:${email}`} title={email}>{email}</Email>
      <Paragraph>
        I'm always open to new challenges. If you have a website in mind and need some help to make your ideas come to life, feel free to contact me 😁
      </Paragraph>
      <Icons>
        <Link href="https://github.com/olachrzan" target="_blank" rel="noreferrer noopener">
          <GithubLogo width={48} height={48} />
        </Link>
        <Link href="https://linkedin.com/in/olachrzan" target="_blank" rel="noreferrer noopener">
          <LinkedInLogo width={48} height={48} />
        </Link>
        <Link href="https://facebook.com/ola.chrzan.79" target="_blank" rel="noreferrer noopener">
          <FacebookLogo width={48} height={48} />
        </Link>
      </Icons>
    </>
  )
};