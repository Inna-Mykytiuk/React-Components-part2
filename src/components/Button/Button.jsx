import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMoreButton }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMoreButton}>
      Load more
    </ButtonLoadMore>
  );
};
