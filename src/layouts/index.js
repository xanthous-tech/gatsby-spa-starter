import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Layout, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import configureStore from '../store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';
import 'antd/dist/antd.css';

const store = configureStore({});

const Container = styled.div`
  height: 100%;

  .layout {
    height: 100%;
  }

  .content {
    padding: 50px;
    flex: 1;
  }
`

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Provider store={store}>
      <LocaleProvider locale={enUS}>
        <Layout className="layout">
          <Header />
          <Layout.Content className="content">
            {children()}
          </Layout.Content>
          <Footer />
        </Layout>
      </LocaleProvider>
    </Provider>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
