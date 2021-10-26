import { Wrapper, Title } from './ErrorPopup.styles';
type ErrorPopupProps = {
  message: string;
};

export const ErrorPopup = ({ message }: ErrorPopupProps) => {
  return (
    <Wrapper>
      <Title>OOPS!!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};
