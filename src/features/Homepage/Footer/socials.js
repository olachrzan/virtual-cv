import { ReactComponent as Github } from "./logos/githubBlack.svg";
import { ReactComponent as LinkedIn } from "./logos/linkedInBlack.svg";
import { ReactComponent as Facebook } from "./logos/facebookBlack.svg";
import { styleLogo } from "./styled";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/olachrzan",
    Icon: styleLogo(Github),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/olachrzan",
    Icon: styleLogo(LinkedIn),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/ola.chrzan.79",
    Icon: styleLogo(Facebook),
  },
];