import { SActionBtn, ActionBtnStylesProps } from './ActionBtn.styles';
import { FC } from 'react';

interface ActionBtnProps {
  name: string;
  func?: any;
  type?: any;
  disabled?: boolean;
  styles: ActionBtnStylesProps;
}

export const ActionBtn: FC<ActionBtnProps> = ({ name, func, type, disabled, styles }: ActionBtnProps) => {
  return (
    <SActionBtn name={name} onClick={func} type={type} disabled={disabled} {...styles}>
      {name}
    </SActionBtn>
  );
};
