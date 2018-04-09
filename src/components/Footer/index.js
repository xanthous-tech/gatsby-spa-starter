import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const StyledFooter = styled(Layout.Footer)`
  height: 150px;
  background-color: #001529 !important;
  color: white !important;

  .copyright {
    text-align: center;
    color: #aaa;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p className="copyright">
      Copyright © Gatsby Starter Single Page Application 2018. All Rights
      Reserved.
    </p>
  </StyledFooter>
);

export default Footer;
