/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content} from './styles';

export default function AuthLayout({children}) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.proTypes = {
  children: PropTypes.element.isRequired,
};
