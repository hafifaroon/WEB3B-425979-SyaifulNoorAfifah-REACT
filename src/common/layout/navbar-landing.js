import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  SmileOutlined,
  HeartOutlined,
  GlobalOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
        <SmileOutlined />
            <Link to="/">Profile</Link> 
        </Menu.Item>
        <Menu.Item key="app">
        <HeartOutlined />
          <Link to="/portofolio">Fam</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
        <GlobalOutlined />
          <a href="https://webarebears.fandom.com/wiki/We_Bare_Bears_Wiki" target="_blank" rel="noopener noreferrer">
            Fandom Wiki
          </a>
        </Menu.Item>
        <Menu.Item key="alipay">
        <GithubOutlined />
          <a href="https://github.com/hafifaroon" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
