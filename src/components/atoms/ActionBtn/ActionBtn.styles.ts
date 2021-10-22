import styled from 'styled-components';

export interface ActionBtnStylesProps {
  width: string;
  height: string;
  background: string;
  border?: string;
  color?: string;
  fontSize?: string;
  margin?: string;
  marginRight?: string;
}

export const SActionBtn = styled.button<ActionBtnStylesProps>`
  cursor: pointer;
  border-radius: 15px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ background }) => background};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  font-size: 1em;
  margin-right: ${({ marginRight }) => marginRight}

  :hover {
    box-shadow: 0 10px 20px -15px grey;
  }
`;
