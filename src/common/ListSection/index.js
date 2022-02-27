import { List, Title, Wrapper } from "./styled";

export const ListSection = ({ title, items }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List longList={items.length > 12 ? true : false}>{items}</List>
  </Wrapper>
);