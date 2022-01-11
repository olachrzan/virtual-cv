import { useSelector } from "react-redux";
import { selectRepositories } from "../../homepageSlice";
import { TilesWrapper, Tile, Title, Description, LinkLine, Link } from "./styled";

export const Tiles = () => {
  const allRepos = useSelector(selectRepositories);
  const unwantedReposNames = ["olachrzan", "virtual_cv"];
  const filterRepos = allRepos.filter(({ name }) => !(unwantedReposNames.includes(name)));

  return (
    <TilesWrapper>
      {allRepos.map(repo => (
        filterRepos.includes(repo) &&
        <Tile key={repo.id}>
          <Title>{repo.name}</Title>
          <Description>{repo.description}</Description>
          <LinkLine>
            Link to:{" "}
            <Link
              href={`https://${repo.owner.login}.github.io/${repo.name}`}
              title={`https://${repo.owner.login}.github.io/${repo.name}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              demo of this project
            </Link>
          </LinkLine>
          <LinkLine>
            Link to:{" "}
            <Link
              href={repo.html_url}
              title={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              code of this project
            </Link>
          </LinkLine>
        </Tile>
      ))}
    </TilesWrapper>
  )
}