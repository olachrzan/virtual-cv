import { Wrapper, Image, ThisIs, Name, Paragraph, Button, Icon } from "./styled";
import personPhoto from "./personPhoto.jpg";
import { email } from "../email";

export const PersonInfo = () => (
  <Wrapper>
    <Image src={personPhoto} alt="Ola Chrzan" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Ola Chrzan</Name>
      <Paragraph>
        Hi, I am a beginner Frontend Developer using React. I am currently looking for new job opportunities, so if you like my projects, contact me 😉
      </Paragraph>
      <Button href={`mailto:${email}`} title={email}>
        <Icon />
        Hire me
      </Button>
    </div>
  </Wrapper>
);