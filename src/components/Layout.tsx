import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode;
}

const AppLayout = ({children} : LayoutProps) => {
  return (
    <Layout>
      <Header>
        <h1>Header</h1>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        Cool
      </Footer>
    </Layout>
  )
}

export default AppLayout;
