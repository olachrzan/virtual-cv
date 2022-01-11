import { Container } from "./common/Container";
import { ThemeSwitcher } from "./common/ThemeSwitcher";
import { Footer } from "./features/Homepage/Footer";
import { PersonInfo } from "./features/Homepage/PersonInfo";
import { Portfolio } from "./features/Homepage/Portfolio";
import { Skills } from "./features/Homepage/Skills";
import { WantToLearn } from "./features/Homepage/WantToLearn";


function App() {
  return (
    <Container>
      <ThemeSwitcher />
      <PersonInfo />
      <Skills />
      <WantToLearn />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
