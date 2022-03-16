import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../../common/ThemeSwitcher/themeSwitcherSlice";
import { ButtonLink } from "../../ButtonLink/styled";
import { ReactComponent as DangerDark } from "./dangerLightMode.svg";
import { ReactComponent as DangerLight } from "./dangerDarkMode.svg";
import { Text, Title, Wrapper } from "./styled";

export const Error = () => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <Wrapper>
      {darkMode ? <DangerLight /> : <DangerDark />}
      <Title>Ooops! Something went wrong... </Title>
      <Text>
        Sorry, failed to load Github projects.<br />You can check them directly on Github.
      </Text>
      <ButtonLink
        href="https://github.com/olachrzan"
        title="https://github.com/olachrzan"
        target="_blank"
        rel="noreferrer noopener"
      >
        Go to Github
      </ButtonLink>
    </Wrapper>
  )
}