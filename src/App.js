import { Footer } from "./features/Homepage/Footer";
import { PersonInfo } from "./features/Homepage/PersonInfo";
import { Portfolio } from "./features/Homepage/Portfolio";
import { Skills } from "./features/Homepage/Skills";
import { WantToLearn } from "./features/Homepage/WantToLearn";


function App() {
  return (
    <>
      <PersonInfo />
      <Skills />
      <WantToLearn />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
