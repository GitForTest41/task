import React, { FC } from 'react';
import { Navigation } from './Navigation/Navigation';
import { TemplateWrapper } from './MainTemplate.styles';

export const MainTemplate: FC = ({ children }) => {
  return (
    <TemplateWrapper>
      <Navigation />
      {children}
    </TemplateWrapper>
  );
};
