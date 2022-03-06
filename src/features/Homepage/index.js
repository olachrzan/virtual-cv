import { Wrapper } from "../../common/Wrapper/styled";
import { ThemeSwitcher } from "../../common/ThemeSwitcher";
import { Footer } from "./Footer";
import { PersonInfo } from "./PersonInfo";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { WantToLearn } from "./WantToLearn";


const Homepage = () => (
  <Wrapper>
    <ThemeSwitcher />
    <PersonInfo />
    <Skills />
    <WantToLearn />
    <Portfolio />
    <Footer />
  </Wrapper>
);

export default Homepage;