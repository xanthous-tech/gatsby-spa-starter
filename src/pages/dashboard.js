import React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

const StyledLayout = styled(Layout)`
  height: 100%;

  .dashboard-content {
    background: white;
  }
`

const Dashboard = ({ match: { params }, dispatch }) => {
  if (params.path == 'profile') return <div>Profile</div>;
  else if (params.path == 'settings') return <div onClick={() => dispatch({type: 'TEST_ACTION'})}>Settings</div>;;
  return <div onClick={() => dispatch({type: 'TEST_ACTION'})}>Hello</div>;
}

class DashboardPage extends React.Component {
  render() {
    return (
      <StyledLayout>
        <Layout.Sider>
          <Menu
            theme="dark"
            { /* defaultSelectedKeys={[window.location.pathname]} TODO: write a util to get window obj */ }
          >
            <Menu.Item key="/dashboard/profile">
              <Link to="/dashboard/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/settings">
              <Link to="/dashboard/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>

        <Layout.Content className="dashboard-content">
          <Route
            path="/dashboard/:path"
            component={connect(null, mapDispatchToProps)(Dashboard)}
          />
        </Layout.Content>
      </StyledLayout>
    )
  }
}

export default DashboardPage;
