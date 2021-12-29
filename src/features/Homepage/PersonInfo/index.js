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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dolor nibh. Nullam finibus enim dui, sit amet sollicitudin ex faucibus quis.
      </Paragraph>
      <Button href={`mailto:${email}`} title={email}>
        <Icon />
        Hire me
      </Button>
    </div>
  </Wrapper>
);