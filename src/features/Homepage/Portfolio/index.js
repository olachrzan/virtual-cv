import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../../../common/ThemeSwitcher/themeSwitcherSlice";
import { fetchRepositories, selectStatus } from "../homepageSlice";
import { Logo, Paragraph, Title, Wrapper } from "./styled";
import { Tiles } from "./Tiles";
import { useEffect } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const Portfolio = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => dispatch(fetchRepositories()), [dispatch]);

  return (
    <Wrapper>
      <Logo fill={darkMode ? "#2188FF" : "#0366D6"} />
      <Title>Portfolio</Title>
      <Paragraph>My recent projects</Paragraph>
      {
        status === "loading"
          ? (<Loader />)
          : (status === "error"
            ? (<Error />)
            : (<Tiles />)
          )
      }
    </Wrapper>
  )
};