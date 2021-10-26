import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 15vh;
  background-color: orange;
  color: white;
  border-radius: 10px;
`;

const StyledParagraph = styled.p`
  color: darkgray;
`;

export const PasswordInfo = () => {
  return (
    <Wrapper>
      <StyledParagraph>Minimum 5 chars, max 15 chars</StyledParagraph>
      <StyledParagraph>At Least one :</StyledParagraph>
      <StyledParagraph>uppercase, digit, special character</StyledParagraph>
    </Wrapper>
  );
};
