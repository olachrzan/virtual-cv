import { email } from "../email";
import { socials } from "./socials";
import { Email, IconList, Item, LetsTalk, Link, Paragraph } from "./styled";

export const Footer = () => {

  return (
    <>
      <LetsTalk>Let's talk!</LetsTalk>
      <Email href={`mailto:${email}`} title={email}>{email}</Email>
      <Paragraph>
        I'm always open to new challenges. If you have a website in mind and need some help to make your ideas come to life, feel free to contact me 😁
      </Paragraph>
      <IconList>
        {socials.map(({ name, url, Icon }) => (
          <Item key={name}>
            <Link href={url} title={name} target="_blank" rel="noreferrer noopener">
              <Icon />
            </Link>
          </Item>
        ))}
      </IconList>
    </>
  )
};