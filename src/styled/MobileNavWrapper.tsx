import * as React from 'react';
import styled from 'styled-components';

const MobileNavWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 1rem;
  z-index: 50;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export default MobileNavWrapper;
