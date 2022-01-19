import { Container } from "../../common/Container";
import { ThemeSwitcher } from "../../common/ThemeSwitcher";
import { Footer } from "./Footer";
import { PersonInfo } from "./PersonInfo";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { WantToLearn } from "./WantToLearn";


const Homepage = () => (
  <Container>
    <ThemeSwitcher />
    <PersonInfo />
    <Skills />
    <WantToLearn />
    <Portfolio />
    <Footer />
  </Container>
);

export default Homepage;