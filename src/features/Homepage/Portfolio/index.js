import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as GithubLogo } from "./github_blue.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectStatus } from "../homepageSlice";
import { Tiles } from "./Tiles";
import { useEffect } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const Portfolio = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchRepositories()), [dispatch]);

  return (
    <Wrapper>
      <GithubLogo />
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
}