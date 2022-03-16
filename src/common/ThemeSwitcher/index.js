import { Icon, Sun, Switcher, SwitcherArea, SwitcherText } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleTheme } from "./themeSwitcherSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <SwitcherArea onClick={() => dispatch(toggleTheme())}>
      <SwitcherText>Dark mode {darkMode ? "on" : "off"}</SwitcherText>
      <Switcher>
        <Icon darkMode={darkMode}>
          <Sun />
        </Icon>
      </Switcher>
    </SwitcherArea>
  )
}