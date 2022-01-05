import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as Logo } from "./githubLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectStatus } from "../homepageSlice";
import { Tiles } from "./Tiles";
import { useEffect } from "react";
import { Loader } from "./Loader";

export const Portfolio = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchRepositories()), []);

  return (
    <Wrapper>
      <Logo />
      <Title>Portfolio</Title>
      <Paragraph>My recent projects</Paragraph>
      {
        status === "loading"
          ? (<Loader />)
          : (status === "error"
            ? (<p>error</p>)
            : (<Tiles />)
          )
      }
    </Wrapper>
  )
}