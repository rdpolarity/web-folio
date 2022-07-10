import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode;
}

const AppLayout = ({children} : LayoutProps) => {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default AppLayout;
