/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import {Wrapper} from './styles';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.proTypes = {
  children: PropTypes.element.isRequired,
};
