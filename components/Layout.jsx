import React from 'react';
import Link from 'next/link';
import { Layout as AntLayout, Menu } from 'antd';
import { useRouter } from 'next/router';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = AntLayout;

const menuItems = Array.from(Array(10).keys()).map(value => {
  if (value === 0) return {value: value + 1, path: `/`}
  return {value: value + 1, path: `/page-${value + 1}`}
})

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <AntLayout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[router.pathname]}
        style={{ lineHeight: '64px' }}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.path}>
                <Link href={item.path}>
                  <a>
                    Page {item.value}
                  </a>
                </Link>
            </Menu.Item>
        ))}
      </Menu>
    </Header>
    <Content style={{ padding: '50px 50px 0' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Next Static Export</Footer>
  </AntLayout>
  )
}

export default Layout;