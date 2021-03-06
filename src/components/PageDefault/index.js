import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll}
    `}
`;
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

// PageDefault.defaultProps = {
//   children: 'text',
//   paddingAll: 0,
// };

// PageDefault.propTypes = {
//   children: PropTypes.string,
//   paddingAll: PropTypes.number,
// };

export default PageDefault;
